import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

import * as S from "./styled";

const MainLayout = () => {
  return (
    <S.LayoutWrapper>
      <Header />
      <S.MainContent>
        <Outlet />
      </S.MainContent>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default MainLayout;
