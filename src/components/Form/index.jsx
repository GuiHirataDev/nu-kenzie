import { useForm } from "react-hook-form";
import { FormStyled } from "./styles";

export const Form = () => {
    const teste = []
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    
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
        type="text"
        id="value"
        placeholder="Insira um valor"
        {...register("value")}
      />
      <label htmlFor="type">Tipo de valor</label>
      <select name="" id="type" {...register("type")}>
        <option value="in">Entrada</option>
        <option value="out">Saída</option>
      </select>
      <button>Inserir valor</button>
    </FormStyled>
  );
};
