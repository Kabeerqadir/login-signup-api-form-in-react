import React, { createContext, useState } from "react";


export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {


  const [auth, setAuth] = useState("This is coming from Context JS");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  // const API_URL = "http://127.0.0.1:5000" 

  const API_URL = "https://comfortable-gold-belt.cyclic.app"

  return (
    <AuthContext.Provider value={{ auth, setAuth, API_URL, isLoggedIn, setisLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
