import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

import { Stack } from "@mui/material";
import Link from "next/link";

import EditIcon from "@mui/icons-material/EditOutlined";
import ShareIcon from "@mui/icons-material/IosShareOutlined";
import DownloadIcon from "@mui/icons-material/SimCardDownloadOutlined";
import MoreIcon from "@mui/icons-material/MoreHorizOutlined";

import Article from "./Article";
import Button from "./Button";

import {
  createNewResume,
  getResumesListInStorage,
  storageKeyForResumesList,
} from "../../../data/resumesDataManager";

const AddResumeButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <Article
      title="New Resume"
      caption="Create a tailored resume for each job application. Double your chances of getting hired!"
      sx={{
        display: {
          // xs: "none",
          lg: "inherit",
        },
      }}
    />
  </Button>
);

const ResumeArticle = ({ title, href, caption, image }) => (
  <Article title={title} caption={caption} image={image}>
    <Link href={href} passHref>
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
);

const ResumesList = ({ userId }) => {
  const storageKey = storageKeyForResumesList(userId);
  const [resumesList, setResumesList] = useLocalStorage(storageKey, []);

  useEffect(() => {
    const [initialData, storageKey] = getResumesListInStorage(userId);
    setResumesList(initialData);
  }, []);

  const newResume = () => {
    const newResumeId = createNewResume(userId);
    setResumesList((list) => [...list, newResumeId]);
    location = `/app/resumes/${newResumeId}}`;
  };

  return (
    <>
      <Stack spacing={3}>
        {resumesList.map((resumeId, idx) => (
          // @Todo: get the resume data by resumeId to feed the <ResumeArticle /> component through props
          // <ResumeArticle />
          <Link prefetch key={resumeId} href={`/app/resumes/${resumeId}`}>
            {`Resume #${idx}`}
          </Link>
        ))}
      </Stack>
      <AddResumeButton onClick={newResume} />
    </>
  );
};

function ResumesTabPanel() {
  const { data: session, status } = useSession();

  const userId = session?.user?.id;

  return (
    <Stack direction="row" spacing={15}>
      {userId && <ResumesList userId={userId} />}
    </Stack>
  );
}

export default ResumesTabPanel;
