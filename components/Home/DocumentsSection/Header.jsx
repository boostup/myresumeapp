import { Typography } from "@mui/material";
import AddResumeButton from "../AddResumeButton";

function Header() {
  return (
    <>
      <Typography variant="subtitle1" sx={_sx.titleStyles}>
        Documents
      </Typography>
      <AddResumeButton sx={_sx.addResumeButtonStyles} size="small" />
    </>
  );
}

export default Header;

const _sx = {
  titleStyles: {
    fontSize: { xs: "2rem" },
  },
  addResumeButtonStyles: {
    display: { xs: "none", md: "block" },
    position: "absolute",
    top: 0,
    right: 0,
  },
};
