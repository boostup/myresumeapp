import { TextField } from "@mui/material";

function FilledTextInput(props) {
  console.log(props);
  return <TextField {...props} placeholder="Filled" variant="filled" />;
}

export default FilledTextInput;
