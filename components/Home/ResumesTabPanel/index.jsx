import { Stack } from "@mui/material";
import Link from "next/link";

import EditIcon from "@mui/icons-material/EditOutlined";
import ShareIcon from "@mui/icons-material/IosShareOutlined";
import DownloadIcon from "@mui/icons-material/SimCardDownloadOutlined";
import MoreIcon from "@mui/icons-material/MoreHorizOutlined";

import Article from "./Article";
import Button from "./Button";

function ResumesTabPanel() {
  return (
    <Stack direction="row" spacing={15}>
      <Article
        title="CV Vichy 2022"
        caption="Updated 11 February, 13:14"
        image="https://ssr.resume.tools/to-image/Rt1bCpzZQqMWTDiUZopLN4FL-1.jpg?size=192&cache=4d36884530"
      >
        <Link href="/app/resumes/123" passHref>
          <Button component="a">
            <EditIcon />
            <span>Edit</span>
          </Button>
        </Link>
        <Button>
          <ShareIcon />
          <span>Share a link</span>
        </Button>
        <Button>
          <DownloadIcon />
          <span>Download PDF</span>
        </Button>
        <Button>
          <MoreIcon />
          <span>More</span>
        </Button>
      </Article>

      <Link href="/resumes/123">
        <Article
          title="New Resume"
          caption="Create a tailored resume for each job application. Double your chances of getting hired!"
          sx={{ display: { xs: "none", lg: "inherit" } }}
        />
      </Link>
    </Stack>
  );
}

export default ResumesTabPanel;
