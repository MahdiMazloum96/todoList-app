import { useState, useEffect } from "react";

function UseLocalStorage(key) {
  const [value, setValue] = useState(function () {
    const localValue = JSON.parse(localStorage.getItem(key));
    if (localValue) {
      return localValue;
    } else return [];
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}

export default UseLocalStorage;
