import { useSession } from "next-auth/react";

import { Stack } from "@mui/material";
import Link from "next/link";

import EditIcon from "@mui/icons-material/EditOutlined";
import ShareIcon from "@mui/icons-material/IosShareOutlined";
import DownloadIcon from "@mui/icons-material/SimCardDownloadOutlined";
import MoreIcon from "@mui/icons-material/MoreHorizOutlined";

import Article from "./Article";
import Button from "./Button";

import { createNewResume } from "../../../data/resumesDataManager";

function ResumesTabPanel() {
  const { data: session, status } = useSession();

  const newResume = () => {
    const newResumeId = createNewResume(session?.user?.id);
    // location = `/app/resumes/${newResumeId}}`;
  };

  return (
    <Stack direction="row" spacing={15}>
      {/* <Article
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
      </Article> */}

      <Button onClick={newResume}>
        <Article
          title="New Resume"
          caption="Create a tailored resume for each job application. Double your chances of getting hired!"
          sx={{ display: { xs: "none", lg: "inherit" } }}
        />
      </Button>
    </Stack>
  );
}

export default ResumesTabPanel;
