import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ProductPhImg from "../../../Shared/img/ph_product.jpg";

import { deleteProduct } from "../../../../store/productSlice";

import SeeMoreButton from "../../../Shared/Buttons/SeeMoreButton/SeeMoreButton";
import EditButton from "../../../Shared/Buttons/EditButton/EditButton";
import DeleteButton from "../../../Shared/Buttons/DeleteButton/DeleteButton";
import Modal from "../../../Shared/Modal/Modal";

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
  const { id, name, category, price, image } = product;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSeeMore = useCallback(() => navigate(`/products/${id}`));
  const handleEdit = useCallback(() => navigate(`/edit/${id}`));
  const handleDelete = useCallback(() => dispatch(deleteProduct({ id })));
  const handleShowModal = useCallback(() => setShowModal(!showModal));

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <CardContainer>
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
          <CategoryTag>{category}</CategoryTag>
          <InfoUnit>{name}</InfoUnit>
          <InfoUnit>R${price.toFixed(2)}</InfoUnit>
        </InfoContainer>
        <ButtonsContainer>
          <SeeMoreButton handleClick={handleSeeMore} />
          <EditButton handleClick={handleEdit} />
          <DeleteButton handleClick={handleShowModal} />
        </ButtonsContainer>
      </CardContainer>
      <Modal
        show={showModal}
        handleClose={handleShowModal}
        content="Deseja excluir o produto? Não será possível reverter essa operação."
        handleConfirm={handleDelete}
      />
    </>
  );
}

export default ProductCard;
