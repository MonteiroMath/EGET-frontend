import styled from "styled-components";

export const BodyContainer = styled.main`
  padding: 65px 10px;
`;

export const ButtonBar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
  column-gap: 10px;
`;

export const FlexSection = styled.div`
  @media screen and (min-width: 576px) {
    display: flex;
    justify-content: space-around;
  }
`;
export const ImageContainer = styled.div`
  margin: 15px auto;
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 576px) {
    margin: 15px 0;
    flex: 0 0 50%;
  }
`;

export const FlexImg = styled.img`
  max-width: 100%;
  max-height: 300px;
`;

export const InfoContainer = styled.div`
  @media screen and (min-width: 576px) {
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 25px;

  @media screen and (min-width: 576px) {
    text-align: left;
  }
`;

export const InfoUnit = styled.div`
  margin-top: 5px;
  font-size: 16px;
  text-align: center;

  @media screen and (min-width: 576px) {
    text-align: left;
  }
`;

export const DescriptionBox = styled.div`
  margin-top: 40px;
  font-size: 14px;
  text-align: left;
  padding-left: 25px;

  @media screen and (min-width: 576px) {
    padding-left: 0;
  }
`;
