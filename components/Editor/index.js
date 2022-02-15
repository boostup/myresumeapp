import dynamic from "next/dynamic";

import styles from "./Editor.module.css";

const Form = dynamic(() => import("./EditorForm/index"), { ssr: false });
const Preview = dynamic(() => import("./EditorPreview"), { ssr: false });

const templateList = ["Default", "Caligrafia"];
const selectedTemplate = templateList[1];

function Editor({ data, setData }) {
  const editionData = data;
  const previewData = data;
  return (
    <div className={styles.container}>
      <Form className={styles.panel} data={editionData} />
      <Preview
        className={`${styles.panel} ${styles.panel__preview}`}
        data={previewData}
        templateName={selectedTemplate}
      />
    </div>
  );
}
export default Editor;
