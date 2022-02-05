import styles from "./Editor.module.css";
import { useLocalStorage } from "../hooks/useLocalStorage";
import dynamic from "next/dynamic";

const Form = dynamic(() => import("../components/Form"), { ssr: false });
const Preview = dynamic(() => import("./Preview"), { ssr: false });

const templateList = ["Default", "Caligrafia"];
const selectedTemplate = templateList[1];

function Editor() {
  const name = useLocalStorage("name", "");
  const checked = useLocalStorage("checked", false);

  const editionData = {
    name,
    checked,
  };

  const previewData = {
    name: name[0],
    checked: checked[0],
  };

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
