import { CardStyled } from "./styles";
import { FaTrash } from "react-icons/fa";

export const Card = ({ transaction, setListTransactions, listTransactions }) => {

  const handleList = (item) => {
    const filteredList = listTransactions.filter((elem) => (elem !== item))

    setListTransactions(filteredList)
  }

  return (
    <CardStyled type={transaction.type}>
      <h2 className="card__title">{transaction.description}</h2>
      <span>{transaction.type}</span>
      <p>
        {(transaction.value * 1).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button onClick={() => handleList(transaction)}>
        <FaTrash />
      </button>
    </CardStyled>
  );
};
