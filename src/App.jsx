import { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import './App.css'
import { TotalMoney } from './components/TotalMoney'
import { List } from './components/List'

function App() {

  const [listTransactions, setListTransactions] = useState([])

  return (
    <>
      <Header />
      <Form setListTransactions={setListTransactions} listTransactions={listTransactions}/>
      <TotalMoney listTransactions={listTransactions}/>
      <List listTransactions={listTransactions}/>
    </>
  )
}

export default App
