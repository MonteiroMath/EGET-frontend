import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import validator from "validator";
import {
  postProduct,
  updateProduct,
  selectProductById,
} from "../../../store/productSlice";

import {
  StyledForm,
  FormGroup,
  StyledInput,
  ButtonContainer,
  StyledButton,
  ErrorContainer,
} from "./styles";

function NewProductForm({ edit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const { id } = params;

  const product = useSelector((state) =>
    selectProductById(state, parseInt(id))
  );

  const defaultState = edit
    ? {
        name: { value: product.name, valid: true },
        category: { value: product.category, valid: true },
        price: { value: product.price, valid: true },
        quantity: { value: product.quantity, valid: true },
        description: { value: product.description, valid: true },
        image: { value: product.name, valid: true },
      }
    : {
        name: { value: "", valid: "" },
        category: { value: "", valid: "" },
        price: { value: "", valid: "" },
        quantity: { value: "", valid: "" },
        description: { value: "", valid: "" },
        image: { value: "", valid: "" },
      };

  const [formState, setFormState] = useState(defaultState);

  const action = edit ? updateProduct : postProduct;

  const validate = {
    name: (value) => validator.isAlphanumeric(value, "pt-BR", { ignore: " " }),
    category: (value) => validator.isAlpha(value),
    price: (value) => validator.isCurrency(value) && parseFloat(value) > 0,
    quantity: (value) => validator.isInt(value) && parseInt(value) > 0,
    description: (value) => !validator.isEmpty(value),
    image: (value) => validator.isURL(value),
  };

  const handleFormChange = useCallback((key) => (event) => {
    const value = event.target.value;

    setFormState((prev) => {
      return { ...prev, [key]: { value, valid: validate[key](value) } };
    });
  });

  const isButtonEnabled = useCallback(
    () =>
      formState.name.valid &&
      formState.category.valid &&
      formState.price.valid &&
      formState.quantity.valid &&
      formState.description.valid &&
      formState.image.valid
  );

  const handleReturn = useCallback((event) => {
    event.preventDefault();
    navigate("/products");
  });

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    dispatch(
      action({
        id,
        name: formState.name.value,
        category: formState.category.value,
        description: formState.description.value,
        price: parseFloat(formState.price.value),
        quantity: parseInt(formState.quantity.value),
      })
    ).then(() => navigate("/products"));
  });

  return (
    <StyledForm>
      <FormGroup>
        <label for="name">Nome*:</label>
        <StyledInput
          id="name"
          name="name"
          placeholder="Ex: Moto G"
          value={formState.name.value}
          onChange={useCallback(handleFormChange("name"))}
        />
        {formState.name.valid === false && (
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
          value={formState.category.value}
          onChange={useCallback(handleFormChange("category"))}
        />
        {formState.category.valid === false && (
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
          value={formState.price.value}
          onChange={useCallback(handleFormChange("price"))}
        />
        {formState.price.valid === false && (
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
          value={formState.quantity.value}
          onChange={useCallback(handleFormChange("quantity"))}
        />
        {formState.quantity.valid === false && (
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
          value={formState.description.value}
          onChange={useCallback(handleFormChange("description"))}
        />
        {formState.description.valid === false && (
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
          value={formState.image.value}
          onChange={useCallback(handleFormChange("image"))}
        />
        {formState.image.valid === false && (
          <ErrorContainer>É necessário informar uma URL válida</ErrorContainer>
        )}
      </FormGroup>
      <ButtonContainer>
        <StyledButton onClick={handleReturn}>Cancelar</StyledButton>
        <StyledButton disabled={!isButtonEnabled()} onClick={handleSubmit}>
          Confirmar
        </StyledButton>
      </ButtonContainer>
    </StyledForm>
  );
}

export default NewProductForm;
