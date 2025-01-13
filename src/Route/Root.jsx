import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const Root = () => {
  return (
    <div className="px-5 md:px-10 lg:px-28"> 
    <Nav />
    <Outlet />
    <Footer />
    </div>
  );
};

export default Root;