import { Box, Typography } from "@mui/material";

function Label({ children }) {
  return (
    <Typography variant="caption" sx={styles}>
      {children}
    </Typography>
  );
}

export default Label;

const styles = {
  display: "flex",
  WebkitBoxAlign: "center",
  alignItems: "center",
  fontSize: "13px",
  lineHeight: "20px",
  color: "rgb(130, 139, 162)",
  marginBottom: "6px",
};
