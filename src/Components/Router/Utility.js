// paths
import { routes } from "../../Routes/routes";

const getPageTitle = (pathName) => {
  if (pathName === "/") {
    return "Globe | Home Page";
  } else {
    for (let x in Object.entries(routes)) {
      const [, layoutData] = Object.entries(routes)[x];
      for (let y in Object.entries(layoutData.routes)) {
        const [, routeData] = Object.entries(layoutData.routes)[y];
        // console.log(layoutData.path.concat(routeData.path));
        // the above can be replaced with routeData.path inside the if given future problems
        if (routeData.path === pathName) {
          return `Globe | ${routeData.title}`;
        }
      }
    }
  }
  return "Globe | 404 Not Found";
};

export default getPageTitle;
