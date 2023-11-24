import React from "react";
// utility
import getPageTitle from "./Utility";

// libs
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LayoutRouter = ({
  loader: pageLoader,
  loadingTime,
  clientTitle,
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = getPageTitle(pathname, clientTitle);
    setIsLoading(true);
    document.body.style.overflow = "hidden";

    const loader = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    }, loadingTime);

    return () => {
      clearTimeout(loader);
      document.body.style.overflow = "unset";
      setIsLoading(false);
    };
  }, [clientTitle, loadingTime, pathname]);

  return (
    <>
      {isLoading && pageLoader}
      {children}
    </>
  );
};

export default LayoutRouter;
