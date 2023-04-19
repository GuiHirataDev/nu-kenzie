import { useForm } from "react-hook-form";
import { FormStyled } from "./styles";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";

export const Form = () => {

  const { register, handleSubmit, onSubmit } = useContext(MainContext)

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        id="description"
        placeholder="Digite aqui sua descrição"
        {...register("description")}
        required
      />
      <span>Ex: Compra de roupas</span>
      <label htmlFor="value">Valor (R$)</label>
      <input
        type="number"
        id="value"
        placeholder="Insira um valor"
        {...register("value")}
        required
      />
      <label htmlFor="type">Tipo de valor</label>
      <select name="" id="type" {...register("type")} required>
        <option value="Entrada">Entrada</option>
        <option value="Saída">Saída</option>
      </select>
      <button type="submit">Inserir valor</button>
    </FormStyled>
  );
};
