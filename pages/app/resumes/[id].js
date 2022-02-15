import { useSession } from "next-auth/react";

import Loader from "../../../components/App/Loader";
import Editor from "../../../components/Editor";

export default function ResumeEditorPage({ id }) {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  return userId ? <Editor userId={userId} resumeId={id} /> : <Loader />;
}

ResumeEditorPage.getInitialProps = async (ctx) => ({ id: ctx?.query?.id });
