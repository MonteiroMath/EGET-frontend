import { useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "../../store/productSlice";

import ProductPhImg from "../Shared/img/ph_product.jpg";

import {
  BodyContainer,
  ButtonBar,
  ImageContainer,
  FlexSection,
  FlexImg,
  Title,
  InfoContainer,
  InfoUnit,
  DescriptionBox,
} from "./styles";
import EditButton from "../Shared/Buttons/EditButton/EditButton";
import DeleteButton from "../Shared/Buttons/DeleteButton/DeleteButton";

function ProductPage() {
  const { id } = useParams();
  const product = useSelector((state) =>
    selectProductById(state, parseInt(id))
  );
  const { name, price, quantity, description, image } = product;

  const navigate = useNavigate();

  const handleEdit = useCallback(() => navigate(`/edit/${id}`));
  const handleDelete = useCallback(() => console.log("todo"));

  return (
    <BodyContainer>
      <ButtonBar>
        <EditButton handleClick={handleEdit} />
        <DeleteButton handleClick={handleDelete} />
      </ButtonBar>
      <FlexSection>
        <ImageContainer>
          <FlexImg
            src={image}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = ProductPhImg;
            }}
          />
        </ImageContainer>
        <InfoContainer>
          <Title>{name}</Title>
          <InfoUnit>
            R${price.toFixed(2)} - {quantity} unidades
          </InfoUnit>

          <DescriptionBox>{description}</DescriptionBox>
        </InfoContainer>
      </FlexSection>
    </BodyContainer>
  );
}

export default ProductPage;
