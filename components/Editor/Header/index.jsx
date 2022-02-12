import { Box, Typography } from "@mui/material";
import FormCloseButton from "./FormCloseButton";

function Header() {
  return (
    <Box sx={rootStyles}>
      <Typography sx={titleStyles}>CV Vichy 2022</Typography>
      <FormCloseButton href="/home" />
    </Box>
  );
}

export default Header;

const rootStyles = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "20vh",
};

const titleStyles = {
  fontSize: {
    xs: "2rem",
  },
  fontWeight: 100,
};
