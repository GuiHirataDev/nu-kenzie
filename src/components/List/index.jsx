import { Card } from "../Card";
import { ListStyled } from "./styles";

export const List = ({ listTransactions }) => {

  return (
    <ListStyled>
      <h2 className="title">Resumo financeiro</h2>
      <ul>
        {listTransactions.map((transaction, index) => (
          <Card transaction={transaction} key={index} />
        ))}
      </ul>
    </ListStyled>
  );
};
