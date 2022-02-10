import { Box } from "@mui/material";
import FormSection from "./FormSection";

const items = [];

function EducationSection() {
  return (
    <FormSection
      deletable
      title="Education"
      description="A varied education on your resume sums up the value that your learnings and background will bring to job."
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

export default EducationSection;
