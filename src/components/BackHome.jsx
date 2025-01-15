import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const BackHome = () => {
  return (
    <Link to={'/'} className="flex gap-3 items-center text-pink-700 mb-5 hover:bg-pink-500 hover:rounded-full w-fit px-3 py-2 hover:text-white">
      <RiArrowGoBackLine />
     <p> Back to Home </p>
    </Link>
  );
};

export default BackHome;