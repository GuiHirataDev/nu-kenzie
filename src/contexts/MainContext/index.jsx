import { createContext, useState } from "react";
import { useForm } from "react-hook-form";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [listTransactions, setListTransactions] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => {
    setListTransactions((dataPrev) => [...dataPrev, data]);

    reset();
  };

  const handleList = (item) => {
    const filteredList = listTransactions.filter((elem) => (elem !== item))

    setListTransactions(filteredList)
  }

  return (
    <MainContext.Provider
      value={{
        listTransactions,
        setListTransactions,
        register, 
        handleSubmit, 
        onSubmit,
        handleList,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
