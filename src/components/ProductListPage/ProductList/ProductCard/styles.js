import styled from "styled-components";

export const CardContainer = styled.div`
  min-height: 125px;
  width: 90%;

  padding: 25px 15px;

  display: flex;
  justify-content: space-around;
  column-gap: 15px;

  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: solid 1px #000033;
  border-radius: 10px;

  @media screen and (min-width: 992px) {
    width: 75%;
  }
`;
//#f5f5dc
//#f7f2f4

export const ImageContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    flex: 0 0 28%;

    max-width: 115px;

    display: flex;
    align-items: center;
    margin-top: 15px;
  }
`;

export const FlexImg = styled.img`
  width: 100%;
`;

export const InfoContainer = styled.div`
  flex: 1;

  text-align: center;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const CategoryTag = styled.div`
  max-width: 80%;
  padding: 5px 10px;
  overflow: hidden;

  border: none;
  border-radius: 5px 10px;

  text-align: center;

  margin: 5px auto 15px auto;

  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const InfoUnit = styled.div`
  margin-bottom: 15px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  row-gap: 5px;
`;

export const IconContainer = styled.div`
  flex: 0 0 5px;
  width: 20px;

  cursor: pointer;
`;
