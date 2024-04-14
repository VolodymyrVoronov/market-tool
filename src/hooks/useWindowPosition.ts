import { useLayoutEffect } from "react";
import { useDebounceValue } from "usehooks-ts";

function useWindowPosition() {
  const [scrollPosition, setPosition] = useDebounceValue(0, 500);

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.scrollY);
    }

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
}

export default useWindowPosition;
