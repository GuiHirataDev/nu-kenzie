import { CardStyled } from "./styles";
import { FaTrash } from "react-icons/fa";

export const Card = ({ transaction }) => {
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
      <button>
        <FaTrash />
      </button>
    </CardStyled>
  );
};
