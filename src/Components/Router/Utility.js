// paths
import { paths } from "../../Routes/routes";

const findPath = (paths, path) => {
  let isPathExists = false;
  Object.entries(paths).forEach(([, route]) => {
    if (route.routes) {
      isPathExists = findPath(route.routes, path);
    } else {
      if (route[path.slice(1)] === path) {
        isPathExists = true;
      }
    }
  });
  return isPathExists;
};

const getPageTitle = (pathname, clientTitle) => {
  const isPathExists = findPath(paths, pathname);

  return pathname === "/globe/"
    ? `${clientTitle} | Homepage`
    : !isPathExists
    ? `${clientTitle} | 404 Not Found`
    : pathname.indexOf("-") === -1
    ? `${clientTitle} | ` + pathname.charAt(1).toUpperCase() + pathname.slice(2)
    : `${clientTitle} | ` +
      pathname
        .replace("-", " ")
        .charAt(1)
        .toUpperCase() +
      pathname.replace("-", " ").slice(2);
};

export default getPageTitle;
