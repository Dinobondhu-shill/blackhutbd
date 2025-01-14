import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Homepage from "@/Pages/Home/Homepage";
import Menu from "@/Pages/Menu/MenuPage";
import Offer from "@/Pages/Offer/Offer";
import Login from "@/Pages/Auth/Login";
import PhoneForm from "@/Pages/Auth/PhoneForm";
import VerifyCode from "@/Pages/Auth/VerifyCode";
import PhoneFormGuest from "@/Pages/Auth/PhoneFormGuest";
import Register from "@/Pages/Auth/Register";
import RedirectRoute from "./RedirectRoute";

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
      element:<RedirectRoute > <Login /> </RedirectRoute> 
    },
    {
      path:'/signup',
      element:  <RedirectRoute > <PhoneForm /> </RedirectRoute>
    },
    {
      path:'/signup/guest',
      element:  <RedirectRoute > <PhoneFormGuest /> </RedirectRoute>
    },
    {
      path:'/verify-code',
      element: <RedirectRoute > <VerifyCode /> </RedirectRoute>
    },
    {
      path:'/signup/register',
      element:<RedirectRoute > <Register /> </RedirectRoute>
    }
   ]
  }
])