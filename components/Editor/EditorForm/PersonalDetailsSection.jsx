import { Box, Grid } from "@mui/material";
import FormSection from "./FormSection";
import FilledTextInput from "./FilledTextInput";

function PersonalDetailsSection() {
  return (
    <FormSection title="Personal Details">
      <Grid>
        <FilledTextInput></FilledTextInput>
      </Grid>
    </FormSection>
  );
}

export default PersonalDetailsSection;
