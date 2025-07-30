import styled from "styled-components";
import devices from "../../styles/breakpoints";

export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #0e0e0e;
  color: #fff;
  padding: 40px 236px;
  border-top: 1px solid #bbb;

  @media screen and (${devices.phone}) {
    padding: 40px 20px;
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 32px;

  @media screen and (${devices.phone}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 16px;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 14px;
  color: #fff;
`;

export const InstallApp = styled.div`
  margin-top: 8px;
  color: #fff;
  cursor: pointer;

  img {
    height: 44px;
    width: auto;
  }

  @media screen and (${devices.phone}) {
    justify-content: center;
  }
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 900;
  font-style: italic;
`;
