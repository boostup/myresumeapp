import { Box } from "@mui/material";
import FilledTextField from "./FilledTextField";
import Label from "./Label";

const FormTextField = ({ toplabel, sx, ...other }) => {
  return (
    <Box sx={styles}>
      <Label>{toplabel}</Label>
      <FilledTextField sx={sx} {...other} />
    </Box>
  );
};

export default FormTextField;

const styles = {
  marginBottom: "20px",
};
