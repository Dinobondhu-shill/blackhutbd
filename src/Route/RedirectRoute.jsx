
import { useContext } from "react";
import { Navigate} from "react-router-dom";
import { BlackContext } from "@/Context/Context";

const RedirectRoute = ({ children }) => {
  const { user } = useContext(BlackContext);

  // If token exists, redirect the user to a protected page or home page
  if (user) {
    return <Navigate to="/"  replace />;
  }

  // Otherwise, render the intended route (e.g., Login or Register page)
  return children;
};

export default RedirectRoute;
