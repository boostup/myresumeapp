import { Box } from "@mui/material";
import EducationSection from "./EducationSection";
import EmploymentHistorySection from "./EmploymentHistorySection";
import Header from "../Header";
import PersonalDetailsSection from "./PersonalDetailsSection";

function EditorForm({ className, data, onChange }) {
  return (
    <div className={className}>
      <Header model={data.meta} onChange={onChange} />

      <PersonalDetailsSection />
      <EmploymentHistorySection />
      <EducationSection />
      <EducationSection />
      <EducationSection />

      <Box>
        {/* Resume Title */}
        {/* Profile completeness */}{" "}
        {/* Add a section for a completeness addition in percent */}
      </Box>

      <Box>
        {/* Personal details */}
        {/* Wanted Job Title */} {/* Edit photo / delete */}
        {/* First Name */} {/* Last Name */}
        {/* Email */} {/* Phone */}
        {/* Edit additional details */}
      </Box>

      <Box>
        {/* About me */}
        {/* Description */}
        {/* Rich Text Editor */}
      </Box>

      <Box>
        {/* Employment History */}
        {/* Description */}

        <Box>
          {/* Job title */}
          {/* period (ie 2017-2018) */}
          {/* Job title */} {/* Employer */}
          {/* Start date */} {/* End date */} {/* City */}
          {/* Description */}
          {/* Rich Text Editor */}
        </Box>
        {/* Add one more employment */}
      </Box>

      <Box>{/* Education */}</Box>

      <Box>{/* Websites & Social Links */}</Box>

      <Box>{/* Skills */}</Box>

      <Box>{/* Languages */}</Box>

      <Box>{/* Courses */}</Box>

      <Box>{/* References */}</Box>

      <Box>{/* Extra-curricular Activities */}</Box>

      <Box>
        {/* Hobbies */}
        {/* Description */}
        {/* Rich Text Editor */}
      </Box>

      <Box>{/* Add Section */}</Box>
    </div>
  );
}

export default EditorForm;
