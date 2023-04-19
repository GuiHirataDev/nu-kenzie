import { Card } from "../Card";
import { ListStyled } from "./styles";

export const List = ({ listTransactions, setListTransactions }) => {
  return (
    <ListStyled>
      <h2 className="title">Resumo financeiro</h2>
      {
        listTransactions.length !== 0 ?
        <ul>
          {listTransactions.map((transaction, index) => (
            <Card transaction={transaction} key={index} setListTransactions={setListTransactions} listTransactions={listTransactions}/>
          ))}
        </ul> :
        <p>Você ainda não possui nenhum lançamento.</p>
      }
    </ListStyled>
  );
};
