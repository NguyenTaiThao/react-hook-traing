import { useState, useEffect } from "react";

const STORAGE_KEY = "itss-position";

function useStorage() {
  const [position, setPosition] = useState(1);
  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, 1);
    } else {
      setPosition(data);
    }
  }, []);

  const nextStudent = () => {
    var newPosition;

    if (position >= 4) newPosition = 1;
    else newPosition = parseInt(position) + 1;

    localStorage.setItem(STORAGE_KEY, newPosition);
    setPosition(newPosition);
  };

  const previousStudent = () => {
    var newPosition;
    if (position <= 1) newPosition = 4;
    else newPosition = parseInt(position) - 1;
    localStorage.setItem(STORAGE_KEY, newPosition);
    setPosition(newPosition);
  };

  return [position, nextStudent, previousStudent];
}

export default useStorage;
