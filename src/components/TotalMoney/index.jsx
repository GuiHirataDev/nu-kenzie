import { useState, useEffect } from "react";
import { TotalMoneyStyled } from "./styles";

export const TotalMoney = ({ listTransactions }) => {
  const values = []

  listTransactions.map((elem) => {
    values.push(elem.value);
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
