import { BlobProvider, PDFViewer } from "@react-pdf/renderer";
import { useEffect } from "react";

import TemplateDoc from "../templates/Caligrafia";

function ThumbnailFromPdfBlob() {
  return (
    <div>
      <BlobProvider document={MyDoc}>
        {({ blob, url, loading, error }) => {
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
              <PDFViewer>{MyDoc}</PDFViewer>
            </>
          );
        }}
      </BlobProvider>
    </div>
  );
}

export default ThumbnailFromPdfBlob;

const MyDoc = (
  <TemplateDoc templateName={"california"} model={{ some: "data" }} />
);

const uploadPdfBlob = (blob) => async (e) => {
  e.preventDefault();
  e.returnValue = "";

  const formData = new FormData();

  formData.append("blobContent", blob);
  formData.append("destinationFileName", "resumeId-userId.pdf");

  try {
    const response = await fetch("/api/thumbnails", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
};
