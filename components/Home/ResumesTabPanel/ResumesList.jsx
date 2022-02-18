import { Grid } from "@mui/material";
import { useEffect } from "react";

import { useLocalStorage } from "../../../hooks/useLocalStorage";

import ResumeArticle from "./ResumeArticle";

import {
  createNewResume,
  getResumesListInStorage,
  storageKeyForResumesList,
} from "../../../data/resumesDataManager";
import AddResumeArticle from "./AddResumeArticle";

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
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {resumesList.map(({ id, resume }, i) => {
        return (
          <Grid item key={i}>
            <ResumeArticle
              href={`/app/resumes/${(id || "").toString() + i}`}
              title={resume?.name}
            ></ResumeArticle>
          </Grid>
        );
      })}
      <Grid item key="addResume">
        <AddResumeArticle onClick={newResume} />
      </Grid>
    </Grid>
  );
};

export default ResumesList;
