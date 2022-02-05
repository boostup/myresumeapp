import Link from "next/link";
import Editor from "../components/Editor";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Link href="/resumeEditor">
          <button>Edit Your CV</button>
        </Link>
      </div>
    </div>
  );
}
