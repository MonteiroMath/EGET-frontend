import easyAnywhere from "./img/easyAnywhere.jpg";
import saveMoney from "./img/saveMoney.jpg";

import {
  HeroHeader,
  HeaderTitle,
  HeaderSubtitle,
  BodyContainer,
  InfoCard,
  ImgContainer,
  FlexImg,
  InfoCardText,
  LeftInfoCardText,
} from "./styles";

function HomePage() {
  //Componente da página inicial - totalmente estático.
  return (
    <>
      <HeroHeader>
        <HeaderTitle>E-GET</HeaderTitle>
        <HeaderSubtitle>Stock Manager</HeaderSubtitle>
      </HeroHeader>
      <BodyContainer>
        <InfoCard>
          <ImgContainer>
            <FlexImg src={`${easyAnywhere}`} />
          </ImgContainer>

          <InfoCardText>Use it easily. Use it anywhere</InfoCardText>
        </InfoCard>
        <InfoCard>
          <ImgContainer>
            <FlexImg src={`${saveMoney}`} />
          </ImgContainer>
          <LeftInfoCardText>Save money. Grow your business</LeftInfoCardText>
        </InfoCard>
      </BodyContainer>
    </>
  );
}

export default HomePage;
