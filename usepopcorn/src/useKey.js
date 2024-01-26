import { useEffect } from "react";

/** Create a custom hook that will be reused for both pressing 'Enter' and 'Escapte'  */
export function useKey(key, action) {
  useEffect(() => {
    function callback(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
        console.log("CLOSING");
      }
    }

    document.addEventListener("keydown", callback);

    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, [action, key]);
}
