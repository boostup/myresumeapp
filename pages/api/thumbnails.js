import fs from "fs";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/thumbnails";
  form.keepExtensions = true;
  form.parse(req, (err, fields, { blobContent }) => {
    const { filepath, newFilename, originalFilename } = blobContent;
    // For some reason, the file ends up being "[uploadDir]/invalid-name"
    // Found nothing on internet about `formidable` package naming files `invalid-name` upon upload, so I still don't know what the root cause is
    fs.rename(
      form.uploadDir + "/invalid-name",
      `${form.uploadDir}/${fields["destinationFileName"]}`,
      (err) => {
        if (err) console.log(err);
      }
    );
    res.status(200).json({ fields });
  });
};
