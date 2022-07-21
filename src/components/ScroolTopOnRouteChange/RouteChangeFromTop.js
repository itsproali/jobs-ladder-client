import { useEffect, memo } from "react";
import { useLocation } from "react-router-dom";

export default memo(function ScrollTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
})