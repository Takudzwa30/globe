// paths
import { routes } from "../../Routes/routes";
import { routes } from "../../Routes/routes";

const getPageTitle = (pathName) => {
  for (let x in Object.entries(routes)) {
    const [, layoutData] = Object.entries(routes)[x];
    for (let y in Object.entries(layoutData.routes)) {
      const [, routeData] = Object.entries(layoutData.routes)[y];
      if (layoutData.path.concat(routeData.path) === pathName) {
        return `Globe | ${routeData.title}`;
      }
    }
  }
  return "Globe | 404 Not Found";
};

export default getPageTitle;
