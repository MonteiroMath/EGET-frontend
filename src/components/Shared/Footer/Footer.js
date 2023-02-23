import { StyledFooter, LargeText, BoldText, WhiteLink } from "./styles";

//TODO: add icons

function Footer() {
  return (
    <StyledFooter>
      <LargeText>E-GET</LargeText>
      <BoldText>Florianópolis, SC</BoldText>
      <BoldText>eget@eget.com</BoldText>
      <BoldText>+ 55 545 455 54</BoldText>
      <BoldText>
        Developed By{" "}
        <WhiteLink href="https://github.com/MonteiroMath" target="_blank">
          Matheus Monteiro
        </WhiteLink>
      </BoldText>
    </StyledFooter>
  );
}

export default Footer;
