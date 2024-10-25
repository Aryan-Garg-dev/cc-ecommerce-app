import { RouteData } from "@/types/routes";
import { Route } from "react-router-dom";

export const renderRoutes = (routes: RouteData[])=>{
  return routes.map((route, index)=>{
    return <Route key={index} path={route.path} element={route.page} />
  })
}