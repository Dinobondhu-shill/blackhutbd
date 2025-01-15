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
import PrivateRoute from "./PrivateRoute";
import MyOrder from "@/Pages/Profile/MyOrder";
import EditProfile from "@/Pages/Profile/EditProfile";
import Address from "@/Pages/Profile/Address";
import Chat from "@/Pages/Profile/Chat";
import ChangePassword from "@/Pages/Profile/ChangePassword";

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
    },
    {
      path: '/user/orders',
      element: <PrivateRoute><MyOrder /></PrivateRoute>
    },
    {
      path: '/user/profile',
      element: <PrivateRoute><EditProfile /></PrivateRoute>
    },
    {
      path: '/user/address',
      element: <PrivateRoute><Address /></PrivateRoute>
    },
    {
      path: '/user/live-chat',
      element: <PrivateRoute><Chat/></PrivateRoute>
    },
    {
      path: '/user/change-password',
      element: <PrivateRoute><ChangePassword /></PrivateRoute>
    }
   ]
  }
])