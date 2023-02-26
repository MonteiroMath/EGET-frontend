import { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, selectProductById } from "../../store/productSlice";

import ProductPhImg from "../Shared/img/ph_product.jpg";
import EditButton from "../Shared/Buttons/EditButton/EditButton";
import DeleteButton from "../Shared/Buttons/DeleteButton/DeleteButton";
import Modal from "../Shared/Modal/Modal";

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

function ProductPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const product = useSelector((state) =>
    selectProductById(state, parseInt(id))
  );

  if (!product) {
    console.log(`Product ${id} not found - redirecting to products page`);
    navigate("/products");
  }
  const { name, price, quantity, description, image } = product;

  const [showModal, setShowModal] = useState(false);

  const handleEdit = useCallback(() => navigate(`/edit/${id}`), [navigate, id]);
  const handleDelete = useCallback(() => {
    dispatch(deleteProduct({ id }));
  }, [dispatch, id]);
  const handleShowModal = useCallback(
    () => setShowModal(!showModal),
    [showModal]
  );

  return (
    <>
      <BodyContainer>
        <ButtonBar>
          <EditButton handleClick={handleEdit} />
          <DeleteButton handleClick={handleShowModal} />
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
      <Modal
        show={showModal}
        handleClose={handleShowModal}
        content="Deseja excluir o produto? Não será possível reverter essa operação."
        handleConfirm={handleDelete}
      />
    </>
  );
}

export default ProductPage;
