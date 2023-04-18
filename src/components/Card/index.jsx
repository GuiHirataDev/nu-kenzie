import { CardStyled } from "./styles";

export const Card = ({ transaction }) => {
  return (
    <CardStyled>
      <h2 className="card__title">{transaction.description}</h2>
      <span>{transaction.type}</span>
      <p>
        {transaction.value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button>Excluir</button>
    </CardStyled>
  );
};
