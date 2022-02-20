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

  try {
    const [fields, files] = await form.parseAsync(req);

    const filePath = files.blobContent.filepath;
    const destinationPath = `${form.uploadDir}/${fields["destinationFileName"]}`;

    const renameResult = await rename(filePath, destinationPath);

    if (renameResult === undefined)
      res.status(200).json({ filePath: `/${destinationPath}` });
  } catch (error) {
    console.log(error);
    res.status(400).json({ details: error.toString() });
  }
};
