import { createContext, useState } from "react";
import photo from '../../public/w3.jpg'

export const BlackContext = createContext();

const ContextProvider = ({children}) => {
  const [showProfile, setShowProfile] =  useState(false)
  const user = {
    name:"Josim uddin ",
    email:"josimvai@gmail.com",
    photo: photo
  }

  const values ={
user,
showProfile,
setShowProfile
  };

  return (
    <BlackContext.Provider value={values}>
      {children}
    </BlackContext.Provider>
  );
};

export default ContextProvider;