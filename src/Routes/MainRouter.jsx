import { Route, Routes } from "react-router-dom";
import { PageBase } from "./PageBase";

const generateRoutes = (routes) => {

    return routes.map((route , index) =>{
  
      const title = route.display;
      const page = <PageBase
        title = {title}
        >
        <route.component title={title} />
        </PageBase>;
  
      return (
  
        <Route
          caseSensitive={false}
          path={route.path}
          key={index}
          element={
            page
          }>{
            generateRoutes(route.children ?? [])
            }
          </Route>
      );
    });
  
  };
  
  
  export const MainRouter = props => {
  
    const { routes = [] } = props;
  
    return (
  
      <Routes>
        {
          generateRoutes(routes)
        }
      </Routes>
  
    )
  
  }