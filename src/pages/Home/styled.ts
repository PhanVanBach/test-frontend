import styled from "styled-components";
import devices from "../../styles/breakpoints";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 236px;
  background-color: #0e0e0e;

  @media screen and (${devices.smallDesktop}) {
    padding: 60px 200px;
  }

  @media screen and (${devices.tablet}) {
    padding: 60px 150px;
  }

  @media screen and (${devices.phone}) {
    padding: 40px 20px;
  }
`;
