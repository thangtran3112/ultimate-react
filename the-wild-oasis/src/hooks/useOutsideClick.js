import { useEffect, useRef } from "react";

/**
 * By default, addEventListener is attached on Bubbling Phase
 * In some case, we want to attach it on Capturing Phase, to avoid click
 * and click-outside to happens right after each another, which is not desired
 */
export const useOutsideClick = (handler, listenCapturing = true) => {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        //console.log("Click outside");
        handler();
      }
    }

    //"true" means that event listener is attached on Capturing phase, but not Bubbling Phase
    //Without "true", when we click on Add new Cabin, we open the Cabin Form, and event is bubbling
    //to StyledModal, when it is against getting closed shortly after
    //Read more: https://www.robinwieruch.de/react-event-bubbling-capturing/
    document.addEventListener("click", handleClick, listenCapturing);
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
};
