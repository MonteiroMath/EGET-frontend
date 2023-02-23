import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  CardContainer,
  ImageContainer,
  FlexImg,
  InfoContainer,
  CategoryTag,
  InfoUnit,
  ButtonsContainer,
  IconContainer,
} from "./styles";

import plusIcon from "./img/plus.png";
import editIcon from "./img/edit.png";
import deleteIcon from "./img/delete.png";

function ProductCard({ product }) {
  const { id, name, category, price } = product;
  const navigate = useNavigate();

  const handleSeeMore = useCallback(() => navigate(`/products/${id}`));
  const handleEdit = useCallback(() => navigate(`/edit/${id}`));
  //implement handleDelete - confirmation popup?

  return (
    <CardContainer>
      <ImageContainer>
        <FlexImg src="https://brmotorolanew.vtexassets.com/arquivos/ids/157347/Smartphone-Moto-G10-64-GB-foto-01.png?v=637522311518930000" />
      </ImageContainer>
      <InfoContainer>
        <CategoryTag>{category}</CategoryTag>
        <InfoUnit>{name}</InfoUnit>
        <InfoUnit>R${price.toFixed(2)}</InfoUnit>
      </InfoContainer>
      <ButtonsContainer>
        <IconContainer onClick={handleSeeMore}>
          <FlexImg src={plusIcon} />
        </IconContainer>
        <IconContainer onClick={handleEdit}>
          <FlexImg src={editIcon} />
        </IconContainer>
        <IconContainer>
          <FlexImg src={deleteIcon} />
        </IconContainer>
      </ButtonsContainer>
    </CardContainer>
  );
}

export default ProductCard;
