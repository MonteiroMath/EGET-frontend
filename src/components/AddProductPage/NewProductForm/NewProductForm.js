import { useState, useCallback, useMemo } from "react";
import validator from "validator";

import {
  StyledForm,
  FormGroup,
  StyledInput,
  ButtonContainer,
  StyledButton,
  ErrorContainer,
} from "./styles";

function NewProductForm({ product, handleReturn, handleSubmit }) {
  const defaultValidationState = product ? true : "";

  const [formState, setFormState] = useState({
    name: product ? product.name : "",
    category: product ? product.category : "",
    price: product ? product.price : "",
    quantity: product ? product.quantity : "",
    description: product ? product.description : "",
    image: product ? product.image : "",
  });

  const [validationState, setValidationState] = useState({
    name: defaultValidationState,
    category: defaultValidationState,
    price: defaultValidationState,
    quantity: defaultValidationState,
    description: defaultValidationState,
    image: defaultValidationState,
  });

  const validate = {
    name: (value) => validator.isAlphanumeric(value, "pt-BR", { ignore: " " }),
    category: (value) => validator.isAlpha(value, "pt-BR"),
    price: (value) => validator.isCurrency(value) && parseFloat(value) > 0,
    quantity: (value) => validator.isInt(value) && parseInt(value) > 0,
    description: (value) => !validator.isEmpty(value),
    image: (value) => validator.isURL(value),
  };

  const handleFormChange = (key) => (event) => {
    const value = event.target.value;

    setFormState((prev) => {
      return { ...prev, [key]: value };
    });

    setValidationState((prev) => {
      return { ...prev, [key]: validate[key](value) };
    });
  };

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
      <FormGroup>
        <label for="name">Nome*:</label>
        <StyledInput
          id="name"
          name="name"
          placeholder="Ex: Moto G"
          value={formState.name}
          onChange={useCallback(handleFormChange("name"))}
        />
        {validationState.name === false && (
          <ErrorContainer>
            O nome não deve conter caracteres especiais
          </ErrorContainer>
        )}
      </FormGroup>

      <FormGroup>
        <label for="category">Categoria*:</label>
        <StyledInput
          id="category"
          name="category"
          placeholder="Ex: celulares"
          value={formState.category}
          onChange={useCallback(handleFormChange("category"))}
        />
        {validationState.category === false && (
          <ErrorContainer>
            A categoria não deve conter caracteres especiais ou números
          </ErrorContainer>
        )}
      </FormGroup>

      <FormGroup>
        <label for="price">Preço*:</label>
        <StyledInput
          id="price"
          name="price"
          placeholder="Ex: 59.99"
          value={formState.price}
          onChange={useCallback(handleFormChange("price"))}
        />
        {validationState.price === false && (
          <ErrorContainer>
            O preço deve ser um decimal (com duas casas) positivo
          </ErrorContainer>
        )}
      </FormGroup>
      <FormGroup>
        <label for="quantity">Quantidade*:</label>
        <StyledInput
          id="quantity"
          name="quantity"
          placeholder="Ex: 300"
          value={formState.quantity}
          onChange={useCallback(handleFormChange("quantity"))}
        />
        {validationState.quantity === false && (
          <ErrorContainer>
            A quantidade deve ser um número positivo
          </ErrorContainer>
        )}
      </FormGroup>
      <FormGroup>
        <label for="description">Descrição*:</label>
        <StyledInput
          type="text"
          id="description"
          name="description"
          placeholder="Informações extras"
          value={formState.description}
          onChange={useCallback(handleFormChange("description"))}
        />
        {validationState.description === false && (
          <ErrorContainer>É obrigatório inserir uma descrição</ErrorContainer>
        )}
      </FormGroup>
      <FormGroup>
        <label for="image">Imagem*:</label>
        <StyledInput
          type="url"
          id="image"
          name="image"
          placeholder="Ex: https://www.google.com/img.png"
          value={formState.image}
          onChange={useCallback(handleFormChange("image"))}
        />
        {validationState.image === false && (
          <ErrorContainer>É necessário informar uma URL válida</ErrorContainer>
        )}
      </FormGroup>
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
