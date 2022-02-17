import { Button, Typography } from "@mui/material";
import { useSession } from "next-auth/react";

import { createNewResume } from "../../../data/resumesDataManager";

function Header() {
  const { data: session, status } = useSession();
  const userId = session?.user?.id;

  const newResume = () => {
    const newResumeId = createNewResume(userId);
    location = `/app/resumes/${newResumeId}`;
  };

  return (
    <>
      <Typography variant="subtitle1" sx={_sx.titleStyles}>
        Documents
      </Typography>
      <Button
        onClick={newResume}
        variant={"contained"}
        sx={_sx.newResumeButtonStyles}
      >
        + Create New
      </Button>
    </>
  );
}

export default Header;

const _sx = {
  titleStyles: {
    fontSize: { xs: "2rem" },
  },
  newResumeButtonStyles: { position: "absolute", top: 0, right: 0 },
};
