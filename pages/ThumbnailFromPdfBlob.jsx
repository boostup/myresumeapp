import { BlobProvider, PDFViewer } from "@react-pdf/renderer";
import { useEffect } from "react";

import TemplateDoc from "../templates/Caligrafia";

function ThumbnailFromPdfBlob() {
  return (
    <div>
      <BlobProvider document={MyDoc}>
        {({ blob, url, loading, error, ...other }) => {
          useEffect(() => {
            const beforeunload = uploadPdfBlob(blob);
            window.addEventListener("beforeunload", beforeunload);

            return () => {
              window.removeEventListener("beforeunload", beforeunload);
            };
          }, [blob]);
          return (
            <>
              <div>blob url: {url}</div>
            </>
          );
        }}
      </BlobProvider>
      <PDFViewer>
        <TemplateDoc templateName={"california"} model={{ some: "data" }} />
      </PDFViewer>
    </div>
  );
}

export default ThumbnailFromPdfBlob;

const MyDoc = (
  <TemplateDoc templateName={"california"} model={{ some: "data" }} />
);

const uploadPdfBlob = (blob) => (e) => {
  console.log("catching on leave event", blob);
  e.preventDefault();
  e.returnValue = "";

  const formData = new FormData();

  formData.append("blobContent", blob);
  formData.append("destinationFileName", "resumeId-userId.pdf");

  fetch("/api/thumbnails", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
