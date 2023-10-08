import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [accountData, setAccountData] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [addAddress, setAddAddress] = useState({
    userID: "65214eb8882e676fb67b512d",
    fullName: "Chamara Gunarathna",
    address: "10/C colombo",
    city: "colombo",
    country: "sri lanka",
    postalCode: "20350",
  });

  const [accessToken, setAccessToken] = useState("");
  const [resMessage, setResMessage] = useState("");
  const[allProducts ,setAllProducts] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        accountData,
        setAccountData,
        formData,
        setFormData,
        accessToken,
        setAccessToken,
        resMessage,
        setResMessage,
        addAddress,
        setAddAddress,
        allProducts,
        setAllProducts
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
