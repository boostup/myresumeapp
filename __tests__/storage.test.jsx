const {
  setStorageValue,
  getStorageValue,
  useLocalStorage,
} = require("../hooks/useLocalStorage");

const foo = `foo-foo`;
const bar = `bar`;
const targetStorageKey = `${foo}-${bar}`;
const someFakeContent = {
  id: targetStorageKey,
  resume: {},
};

test(`Inserting an item of type 'object' into storage with key '${targetStorageKey}' (foo='${foo}' + bar='${bar}')`, () => {
  setStorageValue(targetStorageKey, someFakeContent);
  expect(someFakeContent).toMatchObject(
    JSON.parse(localStorage.getItem(targetStorageKey))
  );
});

test(`Getting an item of type 'object' from storage with key '${targetStorageKey}' (foo='${foo}' + bar='${bar}')`, () => {
  localStorage.setItem(targetStorageKey, JSON.stringify(someFakeContent));
  expect(someFakeContent).toMatchObject(getStorageValue(targetStorageKey));
});
