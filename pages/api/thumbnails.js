import Promise from "bluebird";
import { rename } from "fs/promises";
import formidableImport from "formidable";
import { readFileSync, writeFileSync } from "fs";
import { Buffer } from "buffer";

const formidable = Promise.promisifyAll(formidableImport, { multiArgs: true });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  try {
    const pdfPath = await renamePDF(req, res);
    await createThumbnail(pdfPath);
    res.status(200).json({ filePath: `/${pdfPath}` });
  } catch (error) {
    res.status(400).json(error);
  }
};

function createThumbnail(path) {
  const CloudmersiveConvertApiClient = require("cloudmersive-convert-api-client");

  const defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

  const Apikey = defaultClient.authentications["Apikey"];
  Apikey.apiKey = process.env.CLOUDMERSIVE_API_KEY;

  const apiInstance = new CloudmersiveConvertApiClient.ConvertDocumentApi();

  const inputFile = Buffer.from(readFileSync(path).buffer);

  /**
   * @Todo: This needs to be rewritten in async/await syntax for better maintenance.
   * Note: the `bluebird trick` to convert an lib to ES6 import system.
   * However, because the CloudMersive free account has got very limited quota (on a free plan), should the `bluebird trick` fail, this code rewrite could cost all of it
   */

  const callback = function (error, data, response) {
    try {
      if (error) {
        console.error(error);
        throw new Error(error);
      } else {
        writeFileSync(path + ".png", data, "binary", function (err) {
          if (err) throw err;
          console.log("File saved.");
        });
      }
    } catch (error) {
      /**
       * @Todo: ensure that when CloudMersive responds with error because of a lack of quota or else, this routine should make a copy of a default thumbnail at the destination path
       */
    }
  };
  apiInstance.convertDocumentAutodetectToThumbnail(
    inputFile,
    {
      maxWidth: 190,
      maxHeight: 268,
    },
    callback
  );
}

async function renamePDF(req) {
  try {
    const form = new formidable.IncomingForm();
    form.uploadDir = "public/thumbnails";
    const [fields, files] = await form.parseAsync(req);

    const filePath = files.blobContent.filepath;
    const destinationPath = `${form.uploadDir}/${fields["destinationFileName"]}`;

    const renameResult = await rename(filePath, destinationPath);

    if (renameResult === undefined) return destinationPath;
    else
      throw new Error(
        "An error occured while renaming " + filePath + " to " + destinationPath
      );
  } catch (error) {
    throw new Error(error);
  }
}
