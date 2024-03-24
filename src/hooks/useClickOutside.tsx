import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  callBack: () => void,
) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callBack();
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dispatch, callBack, ref]);
}
