import styled from "styled-components";
import headerImage from "./img/headerImage.jpg";

export const HeroHeader = styled.header`
  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 25px;

  background: center / cover no-repeat url(${headerImage});

  color: white;
`;

const HeaderContainer = styled.div`
  padding: 25px 35px;
  background: rgba(0, 0, 0, 50%);
  font-weight: bold;
`;

export const HeaderTitle = styled(HeaderContainer)`
  align-self: flex-start;
  font-size: 24px;

  @media screen and (min-width: 576px) {
    align-self: center;
    margin-right: 30vw;
  }

  @media screen and (min-width: 768px) {
    margin-right: 20vw;
  }

  @media screen and (min-width: 992px) {
    font-size: 34px;
  }
`;

export const HeaderSubtitle = styled(HeaderContainer)`
  align-self: flex-end;
  font-size: 18px;

  @media screen and (min-width: 576px) {
    align-self: center;
  }

  @media screen and (min-width: 992px) {
    font-size: 28px;
  }
`;

export const BodyContainer = styled.main`
  padding: 8vh 5vw 8vh 5vw;

  color: #000033;
`;

export const InfoCard = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const ImgContainer = styled.div`
  flex: 0 0 30%;

  @media screen and (min-width: 576px) {
    order: 1;
    flex: 0 0 47%;
  }

  @media screen and (min-width: 768px) {
    flex: 0 0 43%;
  }

  @media screen and (min-width: 992px) {
    flex: 0 0 40%;
  }
`;

export const FlexImg = styled.img`
  border-radius: 5px;
  width: 100%;

  box-shadow: 10px 10px 8px #888888;
`;

export const InfoCardText = styled.p`
  margin: 25px;
  padding: 0;
  font-size: 28px;
  font-weight: bold;
  text-align: center;

  @media screen and (min-width: 576px) {
    font-size: 24px;
    order: 2;
  }

  @media screen and (min-width: 992px) {
    font-size: 32px;
  }
`;

export const LeftInfoCardText = styled(InfoCardText)`
  @media screen and (min-width: 576px) {
    order: 0;
  }
`;
