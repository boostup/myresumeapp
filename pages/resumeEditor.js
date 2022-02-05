import Editor from "../components/Editor";

import styles from "../styles/ResumeEditor.module.css";

export default function ResumeEditor() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Editor />
      </div>
    </div>
  );
}
