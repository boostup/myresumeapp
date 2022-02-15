import dynamic from "next/dynamic";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { storageKeyForResume } from "../../data/resumesDataManager";

// import Form from "./EditorForm/index";
// import Preview from "./EditorPreview";

import styles from "./Editor.module.css";

const Form = dynamic(() => import("./EditorForm/index"), { ssr: false });
const Preview = dynamic(() => import("./EditorPreview"), { ssr: false });
const templateList = ["Default", "Caligrafia"];
const selectedTemplate = templateList[1];

function Editor({ userId, resumeId }) {
  const storageKey = storageKeyForResume(userId, resumeId);
  const [resumeData, setResumeData] = useLocalStorage(storageKey, {
    default: { object: "" },
  });

  const editionData = resumeData;
  const previewData = resumeData;
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
