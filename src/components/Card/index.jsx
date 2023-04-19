import { useContext } from "react";
import { CardStyled } from "./styles";
import { FaTrash } from "react-icons/fa";
import { MainContext } from "../../contexts/MainContext";

export const Card = ({ transaction }) => {

  const { handleList } = useContext(MainContext)

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
