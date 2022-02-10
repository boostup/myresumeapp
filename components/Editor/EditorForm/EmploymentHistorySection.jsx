import { Box } from "@mui/material";
import FormSection from "./FormSection";

const items = [];

function EmploymentHistorySection() {
  return (
    <FormSection
      title="Employment History"
      description="Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z)."
    >
      <Box>
        <i>
          <p> List of items here</p>
          <div>
            <pre>{JSON.stringify(items, null, 2)}</pre>
          </div>
        </i>
      </Box>
    </FormSection>
  );
}

export default EmploymentHistorySection;
