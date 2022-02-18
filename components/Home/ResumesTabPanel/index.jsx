import { useSession } from "next-auth/react";

import ResumesList from "./ResumesList";
import AddResumeButton from "../AddResumeButton";

function ResumesTabPanel() {
  const { data: session, status } = useSession();

  const userId = session?.user?.id;

  return (
    <>
      {userId && (
        <>
          <AddResumeButton
            sx={{
              display: { xs: "flex", md: "none" },
              width: "100%",
              justifyContent: "center",
              mb: "2rem",
            }}
          />
          <ResumesList userId={userId} />
        </>
      )}
    </>
  );
}

export default ResumesTabPanel;
