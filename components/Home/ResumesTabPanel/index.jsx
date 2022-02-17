import { useSession } from "next-auth/react";

import { Stack } from "@mui/material";
import ResumesList from "./ResumesList";

function ResumesTabPanel() {
  const { data: session, status } = useSession();

  const userId = session?.user?.id;

  return (
    <Stack direction="row" spacing={15}>
      {userId && <ResumesList userId={userId} />}
    </Stack>
  );
}

export default ResumesTabPanel;
