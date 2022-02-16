import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import Link from "next/link";

const styles = {
  display: "flex",
  position: "absolute",
  cursor: "pointer",
  top: "0",
  right: "0",
  width: "32px",
  height: "32px",
  borderRadius: "16px",
  WebkitBoxAlign: "center",
  alignItems: "center",
  WebkitBoxPack: "center",
  justifyContent: "center",
  color: "rgb(255, 255, 255)",
  backgroundColor: "rgb(190, 196, 213)",
  // display: "none",
  zIndex: 2,
};

function FormCloseButton({ href }) {
  return (
    <Box style={styles}>
      <Link href={href}>
        <CloseIcon />
      </Link>
    </Box>
  );
}

export default FormCloseButton;
