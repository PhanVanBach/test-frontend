import { useState } from "react";
import { CLOSE, LOGO, MOBILE_MENU } from "../../assets";
import Button from "../../common/Button/Button";
import NavbarButton from "./NavButton";
import * as S from "./styled";

const navItems = ["Home", "Items1", "Items2", "Items3", "Items4"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const RenderNavItems = () =>
    navItems.map((label, index) => (
      <NavbarButton
        key={label}
        active={activeIndex === index}
        onClick={() => {
          setActiveIndex(index);
          setMenuOpen(false);
        }}
      >
        {label}
      </NavbarButton>
    ));

  return (
    <>
      <S.HeaderWrapper>
        <S.HeaderLeft>
          <S.MobileIcon onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <img src={CLOSE} alt="close-menu" />
            ) : (
              <img src={MOBILE_MENU} alt="icon-open-menu" />
            )}
          </S.MobileIcon>
          <S.Logo>
            <img src={LOGO} alt="logo" />
          </S.Logo>
          <S.NavMenu>
            <RenderNavItems />
          </S.NavMenu>
        </S.HeaderLeft>

        <S.RightButton>
          <Button variant="primary">Sign Up</Button>
          <Button variant="secondary">Log In</Button>
        </S.RightButton>
      </S.HeaderWrapper>
      <S.MobileMenu $open={menuOpen}>
        <RenderNavItems />
      </S.MobileMenu>
    </>
  );
};

export default Header;
