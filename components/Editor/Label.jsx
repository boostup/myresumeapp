import { Typography } from "@mui/material";

function Label({ children, sx }) {
  return (
    <Typography
      variant="caption"
      sx={{
        ...styles,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}

export default Label;

const styles = {
  display: "flex",
  alignItems: "center",
  fontSize: "13px",
  lineHeight: "20px",
  // @Todo mustn't this value better come from MUI theme object?
  color: "rgb(130, 139, 162)",
  marginBottom: "6px",
};
