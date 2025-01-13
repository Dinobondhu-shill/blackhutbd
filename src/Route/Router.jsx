import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Homepage from "@/Pages/Home/Homepage";
import Menu from "@/Pages/Menu/MenuPage";
import Offer from "@/Pages/Offer/Offer";
import Login from "@/Pages/Auth/Login";
import PhoneForm from "@/Pages/Auth/PhoneForm";
// import Homepage from "../Pages/Home/Homepage";

export const route = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
   children:[
    {
      path:'/',
      element:<Homepage />
    },
    {
      path:'/menu',
      element:<Menu />
    },
    {
      path:'/offers',
      element:<Offer />
    },
    {
      path: '/login',
      element:<Login />
    },
    {
      path:'/signup',
      element: <PhoneForm />
    }
   ]
  }
])