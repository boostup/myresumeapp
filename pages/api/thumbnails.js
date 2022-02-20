import Promise from "bluebird";
import { rename } from "fs/promises";
import formidableImport from "formidable";
import pdf from "pdf-thumbnail";

const formidable = Promise.promisifyAll(formidableImport, { multiArgs: true });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "public/thumbnails";
  // form.keepExtensions = true;
  form
    .parseAsync(req)
    .then(([fields, files]) => {
      return {
        filePath: files.blobContent.filepath,
        destinationPath: `${form.uploadDir}/${fields["destinationFileName"]}`,
      };
    })
    .then(({ filePath, destinationPath }) => {
      rename(filePath, destinationPath);
      return destinationPath;
    })
    .then((fileName) => {
      res.status(200).json({ filePath: `/${fileName}` });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ details: err.toString() });
    });
};
