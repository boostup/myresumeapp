import { v4 as uuidv4 } from "uuid";

import { setStorageValue, getStorageValue } from "../hooks/useLocalStorage";
import resumeSchema from "./schema";

export const USER_RESUME_LIST_KEY = "MY_RESUME_APP_USER_RESUMES_LIST";
export const KEY_SEPARATOR = "::";

export function initResumesListInStorage(userId) {
  if (!userId) return;

  const [resumes, resumesListStorageKey] = getResumesListInStorage(userId);

  if (!Array.isArray(resumes)) {
    setStorageValue(resumesListStorageKey, []);
  }
}

export function getResumesListInStorage(userId) {
  const storageKey = storageKeyForResumesList(userId);
  return [getStorageValue(storageKey), storageKey];
}

export function getPluckedResumesData(
  userId,
  options = { sections: ["id", "meta"] }
) {
  const storageKey = storageKeyForResumesList(userId);
  const resumesList = getStorageValue(storageKey);

  const pluckedResumesData = resumesList.map((resumeId, i) => {
    return getResumeInStorage(userId, resumeId, options);
  });

  return pluckedResumesData;
}

export function getResumeInStorage(
  userId,
  resumeId,
  options = { sections: [] }
) {
  const storageKey = storageKeyForResume(userId, resumeId);
  const resumeModel = getStorageValue(storageKey);

  if (options?.sections?.length === 0) return resumeModel;

  // Otherwise...
  const resumeDataWithSections = options?.sections?.reduce(
    (_resumeData, sectionName) => {
      _resumeData[sectionName] =
        //
        resumeModel?.[sectionName];
      return _resumeData;
    },
    {}
  );

  return resumeDataWithSections;
}

export const createNewResume = (userId) => {
  if (!userId)
    throw new Error(
      `A user id must be provided. '${userId?.toString()}' was provided.`
    );

  initResumesListInStorage(userId);

  const newResumeId = uuidv4();
  const newResumeData = ResumeFactory(newResumeId);
  const newResumeStorageKey = storageKeyForResume(userId, newResumeId);

  // keeping the new resume id the list of resumes for that user (stored with key `USER_RESUME_LIST_KEY::userId`=> An array of manufactored objects by ResumeFactory)
  const [resumesList, resumesListStorageKey] = getResumesListInStorage(userId);
  setStorageValue(resumesListStorageKey, [...resumesList, newResumeId]);

  // storing the actual resume data in a separate storage unit with the key `Resume::userId::resumeId`
  setStorageValue(newResumeStorageKey, newResumeData);

  return newResumeData;
};

const ResumeFactory = (resumeId) => ({
  id: resumeId,
  ...resumeSchema,
});

export function storageKeyForResumesList(userId) {
  return `${USER_RESUME_LIST_KEY}::${userId}`;
}

export function storageKeyForResume(userId, resumeId) {
  return `${resumeId}::${userId}`;
}
