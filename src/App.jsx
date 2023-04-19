import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import "./App.css";
import { TotalMoney } from "./components/TotalMoney";
import { List } from "./components/List";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      <Header />
      <main>
        <section>
          <Form setListTransactions={setListTransactions}/>
          <TotalMoney listTransactions={listTransactions} />
        </section>
        <List listTransactions={listTransactions} setListTransactions={setListTransactions}/>
      </main>
    </>
  );
}

export default App;
