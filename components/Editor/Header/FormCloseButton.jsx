import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import Link from "next/link";

function FormCloseButton({ href }) {
  return (
    <Box sx={styles}>
      <Link href={href}>
        <CloseIcon />
      </Link>
    </Box>
  );
}

export default FormCloseButton;

const styles = {
  display: "flex",
  position: { xs: "absolute", md: "fixed" },
  cursor: "pointer",
  top: { xs: "0", md: "13px" },
  right: { xs: "0", md: "31px" },
  width: "32px",
  height: "32px",
  borderRadius: "16px",
  WebkitBoxAlign: "center",
  alignItems: "center",
  WebkitBoxPack: "center",
  justifyContent: "center",
  color: "rgb(255, 255, 255)",
  backgroundColor: "rgb(190, 196, 213)",
  zIndex: 2,
};
