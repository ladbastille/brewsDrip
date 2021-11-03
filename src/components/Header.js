import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo_180x40.svg";
import timerLogo from "../images/logo-timer.svg";
import searchLogo from "../images/logo-search.svg";
import memberLogo from "../images/logo-member.svg";
import cartLogo from "../images/logo-cart.svg";
import mobileMenuLogo from "../images/logo-mobileMenu.svg";

function Header() {
  return (
    <MainHeader>
      <LogoBtnWrap>
        <MenuLogoWrap>
          <MobileMenu src={mobileMenuLogo} />
          <Link to="/coffeetimer">
            <TimerLogoImg src={timerLogo} />
          </Link>
        </MenuLogoWrap>
        <Link to="/">
          <LogoImg path="/" src={logo} />
        </Link>
        <MenuLogoWrap>
          <MenuLogoImg src={searchLogo} />
          <Link to="/login">
            <MenuLogoImg path="/login" src={memberLogo} />
          </Link>
          <CartLogoImg src={cartLogo} />
        </MenuLogoWrap>
      </LogoBtnWrap>
      <LinksWrap>
        <StyledLink to="/tutorials">COFFEE TUTORIALS</StyledLink>
        <StyledLink to="/tastenotes">TASTE NOTE</StyledLink>
        <StyledLink to="/coffeemap">COFFEE MAP</StyledLink>
        <StyledLink to="/coffeetimer">COFFEE TIMER</StyledLink>
        <StyledLink to="/shop">SHOP</StyledLink>
      </LinksWrap>
    </MainHeader>
  );
}

const MainHeader = styled.div`
  width: 100%;
  height: 140px;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  margin-top: 10px;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const LogoImg = styled.img`
  height: 40px;
  margin-top: 1.2rem;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 30px;
  }
`;

const TimerLogoImg = styled.img`
  height: 40px;
  padding-top: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuLogoImg = styled.img`
  height: 30px;
  padding-top: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const CartLogoImg = styled.img`
  height: 30px;
  padding-top: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 25px;
    margin-left: auto;
  }
`;

const MenuLogoWrap = styled.div`
  width: 135px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
`;

const LogoBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LinksWrap = styled.div`
  height: 51px;
  margin: 0 auto;
  padding: 0 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #e7dfd2;
  border-bottom: 1px solid #e7dfd2;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  font-family: "Poppins";
  font-weight: 700;
  color: #000000;
  margin: 0 0 0 -5px;
  text-decoration: none;
  transition: background 0.1s ease, box-shadow 0.1s ease, color 0.1s ease;

  &:hover {
    color: #de6932;
  }
`;

const MobileMenu = styled.img`
  height: 30px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Header;
