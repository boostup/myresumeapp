import { useEffect } from "react";
import Link from "next/link";

import { useLocalStorage } from "../../../hooks/useLocalStorage";

import Article from "./Article";
import Button from "./Button";
import ResumeArticle from "./ResumeArticle";

import {
  createNewResume,
  getResumesListInStorage,
  storageKeyForResumesList,
} from "../../../data/resumesDataManager";
import { Stack } from "@mui/material";

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
  };

  return (
    <>
      <Stack spacing={3}>
        {resumesList.map((resumeId, idx) => (
          // @Todo: get the resume data by resumeId to feed the <ResumeArticle /> component through props
          // <ResumeArticle />
          <Link key={resumeId} href={`/app/resumes/${resumeId}`}>
            {`Resume #${idx}`}
          </Link>
        ))}
      </Stack>
      <AddResumeButton onClick={newResume} />
    </>
  );
};

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

export default ResumesList;
