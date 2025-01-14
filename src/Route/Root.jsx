import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const Root = () => {

  return (
    <div className="bg-gray-50"> 
    <Nav />
   <div className="px-5 md:px-10 lg:px-28">
   <Outlet />
   </div>
    <div className="">
    <Footer />
    </div>
    </div>
  );
};

export default Root;