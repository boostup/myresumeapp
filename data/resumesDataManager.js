import { v4 as uuidv4 } from "uuid";

import { setStorageValue, getStorageValue } from "../hooks/useLocalStorage";
import resumeSchema from "./schema";

const USER_RESUME_LIST_KEY = "MY_RESUME_APP_USER_RESUMES_LIST";

export function initStorage(userId) {
  return initResumesListInStorage(userId);
}

function initResumesListInStorage(userId) {
  if (!userId) return;

  const [resumes, resumesListStorageKey] = getResumesListInStorage(userId);
  if (!Array.isArray(resumes)) {
    setStorageValue(resumesListStorageKey, []);
  }
}

export function getResumesListInStorage(userId) {
  const storageKey = storageKeyForResumesListFactory(userId);
  return [getStorageValue(storageKey), storageKey];
}

export const createNewResume = (userId) => {
  if (!userId) return false;

  initResumesListInStorage(userId);

  const newResumeId = uuidv4();
  const newResumeData = ResumeFactory(newResumeId);
  const newResumeStorageKey = storageKeyForResumeFactory(userId, newResumeId);

  // keeping the new resume id the list of resumes for that user (stored with key `USER_RESUME_LIST_KEY::userId`=> An array of objects manufactored by ResumeFactory)
  const [resumesList, resumesListStorageKey] = getResumesListInStorage(userId);
  setStorageValue(resumesListStorageKey, [...resumesList, newResumeId]);

  // storing the actual resume data in a separate storage unit with the key `Resume::userId::resumeId`
  setStorageValue(newResumeStorageKey, newResumeData);

  return newResumeId;
};

const ResumeFactory = (resumeId) => ({
  id: resumeId,
  ...resumeSchema,
});

function storageKeyForResumesListFactory(userId) {
  return `${USER_RESUME_LIST_KEY}::${userId}`;
}

function storageKeyForResumeFactory(userId, resumeId) {
  return `Resume::${userId}::${resumeId}`;
}
