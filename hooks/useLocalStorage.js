import { useState, useEffect } from "react";

export function setStorageValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getStorageValue(key, defaultValue) {
  const ISSERVER = typeof window === "undefined";
  let saved = null;
  if (!ISSERVER) {
    saved = localStorage.getItem(key);
    saved = saved === "undefined" ? "{}" : saved;
  }
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    setStorageValue(key, value);
  }, [key, value]);

  return [value, setValue];
};
