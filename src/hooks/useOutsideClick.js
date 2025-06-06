import { useEffect, useRef } from "react";

export function useOutsideClick(close, listenCapturing = true) {
  //const { openName, close } = useContext(ModalContext);
  const ref = useRef();
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        //console.log("out");
        close();
      }
    }
    document.addEventListener("click", handleClickOutside, listenCapturing);
    return () =>
      document.removeEventListener(
        "click",
        handleClickOutside,
        listenCapturing
      );
  }, [close, listenCapturing]);
  return { ref };
}
