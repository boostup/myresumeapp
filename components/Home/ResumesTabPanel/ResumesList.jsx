import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { useLocalStorage } from "../../../hooks/useLocalStorage";

import ResumeArticle from "./ResumeArticle";

import {
  createNewResume,
  getPluckedResumesData,
  getResumesListInStorage,
  storageKeyForResumesList,
} from "../../../data/resumesDataManager";
import AddResumeArticle from "./AddResumeArticle";

const ResumesList = ({ userId }) => {
  const storageKey = storageKeyForResumesList(userId);
  const [undefined, setResumesList] = useLocalStorage(storageKey, []);

  const [resumesMetaData, setResumesMetaData] = useState([]);
  /**
   *    This data is used to bind/store values from UI to localStorage and vice versa, on a single storage item (hence the key passed to the hook : useLocalStorage(storageKey, []), the list of id's of the resumes for the connected user.
   */
  useEffect(() => {
    const [initialData] = getResumesListInStorage(userId);
    setResumesList(initialData);
  }, []);

  /**
   *    This is binding data just to build the UI.  By mapping over this array, items provides the meta data for each resume, for the connected user.  Nothing is stored back into localStorage.  This is just for display/interaction purposes.
   */
  useEffect(() => {
    const initialData = getPluckedResumesData(userId);
    setResumesMetaData(initialData);
  }, []);

  const newResume = () => {
    const newResume = createNewResume(userId);
    setResumesList((list) => [...list, newResume.id]);
    setResumesMetaData((list) => [...list, newResume]);
  };

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {resumesMetaData?.map(({ id, meta }, i) => {
        return (
          <Grid item key={i}>
            <ResumeArticle
              href={`/app/resumes/${id}`}
              title={meta?.title}
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
