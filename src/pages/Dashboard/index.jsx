import { useState } from "react";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { TotalMoney } from "../../components/TotalMoney";
import { List } from "../../components/List";
import { Main } from "./styles";

export const Dashboard = () => {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <section>
          <Form setListTransactions={setListTransactions}/>
          <TotalMoney listTransactions={listTransactions} />
        </section>
        <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>
      </Main>
    </>
  );
}

