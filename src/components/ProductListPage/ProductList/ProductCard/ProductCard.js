import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteProduct } from "../../../../store/productSlice";

import SeeMoreButton from "../../../Shared/Buttons/SeeMoreButton/SeeMoreButton";
import EditButton from "../../../Shared/Buttons/EditButton/EditButton";
import DeleteButton from "../../../Shared/Buttons/DeleteButton/DeleteButton";

import {
  CardContainer,
  ImageContainer,
  FlexImg,
  InfoContainer,
  CategoryTag,
  InfoUnit,
  ButtonsContainer,
} from "./styles";

function ProductCard({ product }) {
  const { id, name, category, price } = product;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSeeMore = useCallback(() => navigate(`/products/${id}`));
  const handleEdit = useCallback(() => navigate(`/edit/${id}`));
  const handleDelete = useCallback(() => dispatch(deleteProduct({ id })));

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
        <SeeMoreButton handleClick={handleSeeMore} />
        <EditButton handleClick={handleEdit} />
        <DeleteButton handleClick={handleDelete} />
      </ButtonsContainer>
    </CardContainer>
  );
}

export default ProductCard;
