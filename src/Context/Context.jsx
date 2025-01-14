import { createContext } from "react";
import photo from '../../public/w3.jpg'

export const BlackContext = createContext();

const ContextProvider = ({children}) => {
  const user = {
    name:"Josim uddin ",
    email:"josimvai@gmail.com",
    photo: photo
  }

  const values ={
user
  };

  return (
    <BlackContext.Provider value={values}>
      {children}
    </BlackContext.Provider>
  );
};

export default ContextProvider;