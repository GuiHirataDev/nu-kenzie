import { useContext } from "react";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { TotalMoney } from "../../components/TotalMoney";
import { List } from "../../components/List";
import { Main } from "./styles";
import { MainContext } from "../../contexts/MainContext";

export const Dashboard = () => {
  
  const { listTransactions, setListTransactions } = useContext(MainContext)

  return (
    <>
      <Header />
      <Main>
        <section>
          <Form/>
          <TotalMoney/>
        </section>
        <List/>
      </Main>
    </>
  );
}

