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
  return (
    <CardContainer>
      <ImageContainer>
        <FlexImg src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" />
      </ImageContainer>
      <InfoContainer>
        <CategoryTag>{category}</CategoryTag>
        <InfoUnit>{name}</InfoUnit>
        <InfoUnit>R${price}</InfoUnit>
      </InfoContainer>
      <ButtonsContainer>
        <IconContainer>
          <FlexImg src={plusIcon} />
        </IconContainer>
        <IconContainer>
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
