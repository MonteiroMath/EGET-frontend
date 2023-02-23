import styled from "styled-components";

export const CardContainer = styled.div`
  height: 125px;
  padding: 10px 5px;

  display: flex;
  justify-content: space-around;
  column-gap: 15px;

  background-color: #f7f2f4;
  border-radius: 5px;
`;

export const ImageContainer = styled.div`
  flex: 0 0 30%;

  display: flex;
  align-items: flex-start;
  margin-top: 15px;
`;

export const FlexImg = styled.img`
  width: 100%;
`;

export const InfoContainer = styled.div`
  flex: 1;

  font-weight: bold;
`;

export const CategoryTag = styled.div`
  width: 40%;
  padding: 5px 10px;

  border: solid 1px black;
  border-radius: 5px 10px;

  text-align: center;

  margin-top: 5px;
  margin-bottom: 15px;

  background-color: #787576;
  color: white;
`;

export const InfoUnit = styled.div`
  margin-bottom: 15px;
`;

export const ButtonsContainer = styled.div`
  margin-right: 15px;

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
