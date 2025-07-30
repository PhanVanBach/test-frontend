import styled from "styled-components";
import devices from "../styles/breakpoints";

export const LayoutWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  flex: 1;
  padding-top: 80px;

  @media screen and (${devices.phone}) {
    padding-top: 60px;
  }
`;
