import Button from "./ResumesTabPanel/Button";
import { useSession } from "next-auth/react";

import { createNewResume } from "../../data/resumesDataManager";

function AddResumeButton({ sx, ...other }) {
  const { data: session, status } = useSession();
  const userId = session?.user?.id;

  const newResume = () => {
    const newResume = createNewResume(userId);
    location = `/app/resumes/${newResume.id}`;
  };

  return (
    <Button
      onClick={newResume}
      variant={"contained"}
      {...other}
      sx={{
        ..._sx.addResumeButtonStyles,
        ...sx,
      }}
    >
      + Create New
    </Button>
  );
}

export default AddResumeButton;

const _sx = {};
