import { TextField } from "@mui/material";

const FilledTextField = ({ sx, ...other }) => (
  <TextField
    variant="filled"
    sx={{
      width: "100%",
      ...styles,
      "& .MuiInputBase-input": {
        padding: "1.5rem 1rem",
        ...sx,
      },
    }}
    {...other}
  />
);

const backgroundColor = "rgb(239, 242, 249)";
const styles = {
  "& .MuiFilledInput-root": {
    backgroundColor,
  },
  "& .MuiFilledInput-root:before": {
    borderBottom: "0",
  },
  "&:hover": {
    backgroundColor,
  },
  "&.Mui-focused": {
    backgroundColor,
  },

  "& .MuiFilledInput-root:hover": {
    borderBottom: "0",
  },

  "& .MuiFilledInput-root.MuiFilledInput-underline:hover:before": {
    borderBottom: "0",
  },
};

export default FilledTextField;
