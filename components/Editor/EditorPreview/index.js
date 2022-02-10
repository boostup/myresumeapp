import { PDFViewer } from "@react-pdf/renderer";
import dynamic from "next/dynamic";

import TplLoading from "../../../templates/Loading";

function Preview({ className, data, templateName }) {
  const DynamicTemplate = dynamic(
    () => import(`../../../templates/${templateName}`),
    {
      loading: () => <TplLoading />,
    }
  );
  return (
    <div className={className}>
      <PDFViewer showToolbar={false} className={className}>
        <DynamicTemplate templateName={templateName} model={data} />
      </PDFViewer>
    </div>
  );
}

export default Preview;
