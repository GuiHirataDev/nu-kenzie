import { useContext } from "react";
import { TotalMoneyStyled } from "./styles";
import { MainContext } from "../../contexts/MainContext";

export const TotalMoney = () => {

  const { listTransactions } = useContext(MainContext)

  const values = [];

  listTransactions.map((elem) => {
    if(elem.type === "Entrada"){
      values.push(elem.value * 1);
    } else {
      values.push(elem.value * -1);
    }
  });

  const initialValue = 0;
  const value = values.reduce((acc, cur) => acc + cur, initialValue);

  return (
    <TotalMoneyStyled>
      <div>
        <h2>Valor total:</h2>
        <p>
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </TotalMoneyStyled>
  );
};
