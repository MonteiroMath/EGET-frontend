import { useState, useMemo } from "react";
import validator from "validator";

import FormItem from "./FormItem/FormItem";
import { StyledForm, ButtonContainer } from "./styles";
import { StyledButton } from "../../Shared/Buttons/StyledButton/styles";

function NewProductForm({ product, handleReturn, handleSubmit }) {
  //formulário para adição de produtos.

  /*inicialização do estado do formulário.
  //Strings vazias caso não tenha sido informado um produto (inclusão) ou
  Valores do produto passado por props em caso de edição*/
  const [formState, setFormState] = useState({
    name: product ? product.name : "",
    category: product ? product.category : "",
    price: product ? product.price : "",
    quantity: product ? product.quantity : "",
    description: product ? product.description : "",
    image: product ? product.image : "",
  });

  /*Inicialização dos estados de validação
  Strings vazias em caso de adição de produto ou true em caso de edição de um produto*/
  const defaultValidationState = product ? true : "";
  const [validationState, setValidationState] = useState({
    name: defaultValidationState,
    category: defaultValidationState,
    price: defaultValidationState,
    quantity: defaultValidationState,
    description: defaultValidationState,
    image: defaultValidationState,
  });

  //funções para validação de cada campo do formulário.
  const validate = {
    name: (value) => validator.isAlphanumeric(value, "pt-BR", { ignore: " " }),
    category: (value) => validator.isAlpha(value, "pt-BR"),
    price: (value) => validator.isCurrency(value) && parseFloat(value) > 0,
    quantity: (value) => validator.isInt(value) && parseInt(value) > 0,
    description: (value) => !validator.isEmpty(value),
    image: (value) => validator.isURL(value),
  };

  /*
    Callback para alteração de campos do formulário
    Atualiza o valor do campo do formulário, bem como seu estado de validação
  */
  const handleFormChange = (key) => (event) => {
    const value = event.target.value;

    setFormState((prev) => {
      return { ...prev, [key]: value };
    });
    setValidationState((prev) => {
      return { ...prev, [key]: validate[key](value) };
    });
  };

  //Função para calcular se o botão de submissão deve ser ativado ou não
  const isButtonEnabled = useMemo(
    () =>
      validationState.name &&
      validationState.category &&
      validationState.price &&
      validationState.quantity &&
      validationState.description &&
      validationState.image,
    [validationState]
  );

  return (
    <StyledForm>
      <FormItem
        name="name"
        label="Nome*:"
        placeholder="Ex: Moto G"
        value={formState.name}
        valid={validationState.name === false}
        errMsg="O nome não deve conter caracteres especiais"
        handleChange={handleFormChange("name")}
      />
      <FormItem
        name="category"
        label="Categoria*:"
        placeholder="Ex: celulares"
        value={formState.category}
        valid={validationState.category === false}
        errMsg="A categoria não deve conter caracteres especiais ou números"
        handleChange={handleFormChange("category")}
      />
      <FormItem
        name="price"
        label="Preço*:"
        placeholder="Ex: 59.99"
        value={formState.price}
        valid={validationState.price === false}
        errMsg="O preço deve ser um decimal (com duas casas) positivo, com separador '.'"
        handleChange={handleFormChange("price")}
      />
      <FormItem
        name="quantity"
        label="Quantidade*:"
        placeholder="Ex: 300"
        value={formState.quantity}
        valid={validationState.quantity === false}
        errMsg="A quantidade deve ser um número inteiro positivo"
        handleChange={handleFormChange("quantity")}
      />
      <FormItem
        name="description"
        label="Descrição*:"
        placeholder="Informações extras"
        value={formState.description}
        valid={validationState.description === false}
        errMsg="É obrigatório inserir uma descrição."
        handleChange={handleFormChange("description")}
      />
      <FormItem
        name="image"
        label="Imagem*:"
        placeholder="Ex: https://www.google.com/img.png"
        value={formState.image}
        valid={validationState.image === false}
        errMsg="É necessário informar uma URL válida."
        handleChange={handleFormChange("image")}
      />

      <ButtonContainer>
        <StyledButton onClick={handleReturn}>Cancelar</StyledButton>
        <StyledButton
          disabled={!isButtonEnabled}
          onClick={(ev) => handleSubmit(ev, formState)}
        >
          Enviar
        </StyledButton>
      </ButtonContainer>
    </StyledForm>
  );
}

export default NewProductForm;
