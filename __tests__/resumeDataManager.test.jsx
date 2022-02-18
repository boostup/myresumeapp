const {
  USER_RESUME_LIST_KEY,
  KEY_SEPARATOR,
  storageKeyForResumesList,
  storageKeyForResume,
  createNewResume,
  getResumeInStorage,
  getResumesListInStorage,
  initResumesListInStorage,
  getPluckedResumesListInStorage,
} = require("../data/resumesDataManager");
const { setStorageValue } = require("../hooks/useLocalStorage");

const userId = `10823-02154`;
const resumeId = `0000-11111-22222-333333`;
const resumesList_storageKey = `${USER_RESUME_LIST_KEY}${KEY_SEPARATOR}${userId}`;
const resume_storageKey = `${resumeId}${KEY_SEPARATOR}${userId}`;
class MockObj {
  constructor(id) {
    this.id = id;
    this.resume = {};
  }
}

afterEach(() => {
  return localStorage.clear();
});

test(`Storage key for list of resumes id's: userId='${userId}' = '${resumesList_storageKey}'`, () => {
  expect(storageKeyForResumesList(userId)).toMatch(resumesList_storageKey);
});

test(`Storage key for a resume: userId='${userId}' + resumeId='${resumeId}' = '${resume_storageKey}'`, () => {
  expect(storageKeyForResume(userId, resumeId)).toMatch(resume_storageKey);
});

test(`Initiating storage without a valid 'userId' should immediately return to prevent any manipulation on the storage data`, () => {
  const snapshot1 = localStorage.length;
  initResumesListInStorage();
  const snapshot2 = localStorage.length;
  expect(snapshot1).toEqual(0);
  expect(snapshot1).toEqual(snapshot2);
});

test(`Initiating storage should create a new item to store the list of resume id's`, () => {
  const snapshot1 = localStorage.length;
  expect(snapshot1).toEqual(0);
  initResumesListInStorage(userId);

  const snapshot2 = localStorage.length;
  expect(snapshot2).toEqual(1);

  const [newStoredItem, storageKey] = getResumesListInStorage(userId);
  expect(storageKey).toContain(userId);
});

test(`Attempting to initiate storage more than once should not overwrite the already existing list of resume id's for that specific userId`, () => {
  initResumesListInStorage(userId);
  setStorageValue(storageKeyForResumesList(userId), [resumeId]);
  const [newlyStoredItem] = getResumesListInStorage(userId);
  const snapshot1 = newlyStoredItem;

  initResumesListInStorage(userId);
  const [currentStoredItem] = getResumesListInStorage(userId);
  const snapshot2 = currentStoredItem;

  expect(snapshot1).toMatchObject(snapshot2);
});

test(`Storage can handle various users`, () => {
  const user1 = userId,
    user2 = userId.split("").reverse().join(""),
    resume1 = resumeId,
    resume2 = resumeId.split("").reverse().join("");

  initResumesListInStorage(user1);
  setStorageValue(storageKeyForResumesList(user1), [resume1]);
  const [snapshot1] = getResumesListInStorage(user1);
  expect(snapshot1.length).toBe(1);

  initResumesListInStorage(user2);
  setStorageValue(storageKeyForResumesList(user2), [resume2]);
  const [snapshot2] = getResumesListInStorage(user2);
  expect(snapshot2.length).toBe(1);

  expect(localStorage.length).toBe(2);
});

test(`The list of resumes id's should be stored as an array of resume objects`, () => {
  const targetStorageKey = resumesList_storageKey;
  const targetArray = ["as1d23-asd321-asdas"];

  localStorage.setItem(targetStorageKey, JSON.stringify(targetArray));
  expect(localStorage.length).toBe(1);

  const [resumesList] = getResumesListInStorage(userId);
  expect(resumesList).toMatchObject(targetArray);

  const storedObj = JSON.parse(localStorage.getItem(targetStorageKey));
  expect(resumesList).toMatchObject(storedObj);
});

test(`Creating a new resume without a valid 'userId' should throw an Error`, () => {
  expect(() => createNewResume()).toThrowError();
  expect(() => createNewResume(null)).toThrowError();
  expect(() => createNewResume(undefined)).toThrowError();
  expect(() => createNewResume("")).toThrowError();
});

test(`Creating a new resume for userId='${userId}' should return the new resume 'id'`, () => {
  const _resumeId = createNewResume(userId);
  expect(_resumeId).toBeTruthy();
});

test(`[direct test] Creating a new resume should result in a new resume item in storage with matching id's`, () => {
  const _resumeId = createNewResume(userId);
  const targetStorageKey = storageKeyForResume(userId, _resumeId);

  // [by direct test, I mean => using 'localStorage.getItem' instead of 'getResumeInStorage']
  const storedObj = JSON.parse(localStorage.getItem(targetStorageKey));
  expect(storedObj.id).toEqual(_resumeId);
});

test(`[indirect test] Creating a new resume should result in a new resume item in storage with matching id's`, () => {
  const _resumeId = createNewResume(userId);

  // [by indirect test, I mean => using 'getResumeInStorage' instead of localStorage.getItem directly]
  const resume = getResumeInStorage(userId, _resumeId);
  expect(resume.id).toMatch(_resumeId);
});

test(`Creating a new resume should also store the new id in the stored resumes list of id's for that user`, () => {
  const _resumeId = createNewResume(userId);
  const targetStorageKey = storageKeyForResumesList(userId);
  const storedArray = JSON.parse(localStorage.getItem(targetStorageKey));
  expect(storedArray).toContain(_resumeId);
});

test(`Getting a resume with specific sections results in a resume object which includes the specified section(s) only`, () => {
  const sections = ["id", "resume", "personalDetails"];
  const _resumeId = createNewResume(userId);
  const resume = getResumeInStorage(userId, _resumeId, sections);
  expect(Object.keys(resume)).toMatchObject(sections);
});
