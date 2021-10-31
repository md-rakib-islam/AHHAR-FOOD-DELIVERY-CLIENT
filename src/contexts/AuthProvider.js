import { createContext } from "react";
import useCart from "../hooks/useCart.js";
import useFirebase from "../hooks/useFirebase.js";
import useservices from "./../hooks/useservices.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // hooks
  const AllContexts = useFirebase();
  const { services, totalPage, currentPage, setCurrentPage } = useservices();
  const { addToCart, selectedservice, remove, setSelectedservice } = useCart();

  const data = {
    currentPage,
    setCurrentPage,
    AllContexts,
    totalPage,
    services,
    addToCart,
    selectedservice,
    remove,
    setSelectedservice,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
