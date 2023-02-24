import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postProduct } from "../../../store/productSlice";
import { StyledForm, FormGroup, ButtonContainer } from "./styles";

function NewProductForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: { value: "", valid: "" },
    category: { value: "", valid: "" },
    price: { value: "", valid: "" },
    quantity: { value: "", valid: "" },
    description: { value: "", valid: "" },
    image: { value: "", valid: "" },
  });

  const handleFormChange = useCallback((key) => (event) => {
    setFormState((prev) => {
      return { ...prev, [key]: { value: event.target.value, valid: "" } };
    });
  });

  const handleReturn = useCallback((event) => {
    event.preventDefault();
    navigate("/products");
  });

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    dispatch(
      postProduct({
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
        <label for="name">Nome:</label>
        <input
          id="name"
          name="name"
          placeholder="Ex: Moto G"
          value={formState.name.value}
          onChange={useCallback(handleFormChange("name"))}
        />
      </FormGroup>

      <FormGroup>
        <label for="category">Categoria:</label>
        <input
          id="category"
          name="category"
          placeholder="Ex: celulares"
          value={formState.category.value}
          onChange={useCallback(handleFormChange("category"))}
        />
      </FormGroup>

      <FormGroup>
        <label for="price">Preço:</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Ex: 59.99"
          value={formState.price.value}
          onChange={useCallback(handleFormChange("price"))}
        />
      </FormGroup>
      <FormGroup>
        <label for="quantity">Quantidade:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          placeholder="Ex: 300"
          value={formState.quantity.value}
          onChange={useCallback(handleFormChange("quantity"))}
        />
      </FormGroup>
      <FormGroup>
        <label for="description">Descrição:</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Informações extras"
          value={formState.description.value}
          onChange={useCallback(handleFormChange("description"))}
        />
      </FormGroup>
      <FormGroup>
        <label for="image">Imagem:</label>
        <input
          type="url"
          id="image"
          name="image"
          placeholder="Ex: https://www.google.com/img.png"
          value={formState.image.value}
          onChange={useCallback(handleFormChange("image"))}
        />
      </FormGroup>
      <ButtonContainer>
        <button onClick={handleReturn}>Cancelar</button>
        <button onClick={handleSubmit}>Cadastrar</button>
      </ButtonContainer>
    </StyledForm>
  );
}

export default NewProductForm;
