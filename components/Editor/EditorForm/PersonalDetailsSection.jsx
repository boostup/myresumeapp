import { Box, Grid } from "@mui/material";
import FormSection from "./FormSection";
import FormTextField from "./FormTextField";

function PersonalDetailsSection() {
  return (
    <FormSection title="Personal Details">
      <Grid>
        <FormTextField toplabel="Wanted Job Title" />
        <FormTextField toplabel="First Name" />
        <FormTextField toplabel="Last Name" />
        <FormTextField toplabel="Email" />
        <FormTextField toplabel="Phone" />
      </Grid>
    </FormSection>
  );
}

export default PersonalDetailsSection;
