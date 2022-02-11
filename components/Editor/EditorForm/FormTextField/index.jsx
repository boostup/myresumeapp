import { Box } from "@mui/material";
import FilledTextField from "./FilledTextField";
import Label from "./Label";

const FormTextField = (props) => {
  return (
    <Box style={styles}>
      <Label>{props.toplabel}</Label>
      <FilledTextField {...props} />
    </Box>
  );
};

export default FormTextField;

const styles = {
  marginBottom: "20px",
};
