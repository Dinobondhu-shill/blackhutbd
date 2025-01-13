import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
// import Homepage from "../Pages/Home/Homepage";

export const route = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
   
  }
])