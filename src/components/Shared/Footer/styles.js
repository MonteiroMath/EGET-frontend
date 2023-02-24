import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 15px;

  background: rgba(0, 0, 0, 70%);
  color: white;

  margin-top: auto;
`;

export const BoldText = styled.div`
  padding: 2px;
  font-size: 13px;
  font-weight: bold;
`;

export const LargeText = styled(BoldText)`
  font-size: 16px;
`;

export const WhiteLink = styled.a`
  color: white;
`;
