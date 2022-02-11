import { styled, TextField } from "@mui/material";

const backgroundColor = "rgb(239, 242, 249)";

const FilledTextInput = styled((props) => (
  <TextField variant="filled" sx={{ width: "100%" }} {...props} />
))(({ theme }) => ({
  "& .MuiInputBase-input": {
    // backgroundColor,
    padding: "12px 16px",
  },
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
}));

export default FilledTextInput;
