import { useState, useEffect } from "react";

function useDebounce(value: any, delay = 300) {
  const [debounceVal, setDebounceVal] = useState(value);
  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebounceVal(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debounceVal;
}

export default useDebounce;
