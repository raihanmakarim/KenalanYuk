import react, { createContext } from "react";
import { useState, useEffect, useContext } from "react";
import { Text, View } from "react-native";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  //   const [user, setUser] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     // check if user is logged in or not
  //   }, []);

  //   const login = () => {
  //     // login logic
  //   };

  //   const logout = () => {
  //     // logout logic
  //   };

  //   const signup = () => {
  //     // signup logic
  //   };

  return (
    <AuthContext.Provider
      value={{
        user: "asa",
        //   login,
        //   logout,
        //   signup,
        //   loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
