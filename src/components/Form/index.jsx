import { useForm } from "react-hook-form";
import { FormStyled } from "./styles";

export const Form = ({setListTransactions, listTransactions}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setListTransactions(dataPrev => [...dataPrev, data])
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        id="description"
        placeholder="Digite aqui sua descrição"
        {...register("description")}
      />
      <span>Ex: Compra de roupas</span>
      <label htmlFor="value">Valor (R$)</label>
      <input
        type="number"
        id="value"
        placeholder="Insira um valor"
        {...register("value")}
      />
      <label htmlFor="type">Tipo de valor</label>
      <select name="" id="type" {...register("type")}>
        <option value="Entrada">Entrada</option>
        <option value="Saída">Saída</option>
      </select>
      <button type="submit">Inserir valor</button>
    </FormStyled>
  );
};
