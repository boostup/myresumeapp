import { useSession } from "next-auth/react";

import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { storageKeyForResume } from "../../../data/resumesDataManager";

import Editor from "../../../components/Editor";

export default function ResumeEditorPage({ id }) {
  const { data: session } = useSession();

  const storageKey = storageKeyForResume(session?.user?.id, id);
  const [resumeData, setResumeData] = useLocalStorage(storageKey, []);

  return <Editor data={resumeData} setData={setResumeData} />;
}

ResumeEditorPage.getInitialProps = async (ctx) => {
  return { id: ctx?.query?.id };
};
