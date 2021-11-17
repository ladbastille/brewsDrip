import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../images/logo_180x40.svg";
import timerLogo from "../images/logo-timer.svg";
import searchLogo from "../images/logo-search.svg";
import memberLogo from "../images/logo-member.svg";
import cartLogo from "../images/logo-cart.svg";
import mobileMenuLogo from "../images/logo-mobileMenu.svg";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <MainHeader>
      <LogoBtnWrap>
        <MenuLogoWrap>
          <MobileMenu
            src={mobileMenuLogo}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          />
          <Link to="/timerlist">
            <TimerLogoImg src={timerLogo} />
          </Link>
        </MenuLogoWrap>
        <Link to="/">
          <LogoImg path="/" src={logo} />
        </Link>
        <MenuLogoWrap>
          {/* <MenuLogoImg src={searchLogo} /> */}
          {/* <MenuLogoImg src={cartLogo} /> */}
          <Link to="/timerlist">
            <MobileTimerLogo src={timerLogo} />
          </Link>
          <Link to="/login">
            <MenuLogoImg path="/login" src={memberLogo} />
          </Link>
        </MenuLogoWrap>
      </LogoBtnWrap>

      <LinksWrap mobileMenuOpen={mobileMenuOpen}>
        <StyledLink to="/tutorials" onClick={() => setMobileMenuOpen((prev) => !prev)}>COFFEE TUTORIALS</StyledLink>
        <StyledLink to="/tastenotelist" onClick={() => setMobileMenuOpen((prev) => !prev)}>TASTE NOTE</StyledLink>
        <StyledLink to="/timerlist" onClick={() => setMobileMenuOpen((prev) => !prev)}>COFFEE TIMER</StyledLink>
        {/* <StyledLink to="/coffeemap" onClick={() => setMobileMenuOpen((prev) => !prev)}>COFFEE MAP</StyledLink> */}
        {/* <StyledLink to="/shop" onClick={() => setMobileMenuOpen((prev) => !prev)}>SHOP</StyledLink> */}
      </LinksWrap>
    </MainHeader>
  );
}

const MainHeader = styled.div`
  width: 100%;
  min-width:375px;
  height: 120px;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  margin-top: 2px;
  margin-bottom: 5px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #ffffff;
  @media (max-width: 1024px) {
    height: 100px;
  }
  @media (max-width: 768px) {
    height: 50px;
    border-radius:0 0 10px 10px;
  }
  @media (max-width: 374px){
    min-width: 100%;
  }
`;

export const LogoImg = styled.img`
  height: 40px;
  margin-top: 1.2rem;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 30px;
    margin-top:0.6rem;
  }
`;

export const TimerLogoImg = styled.img`
  height: 35px;
  align-self:center;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuLogoImg = styled.img`
  height: 35px;
  width:35px;
  align-self:center;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

const CartLogoImg = styled.img`
  height: 35px;
  align-self:center;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 25px;
    margin-left: auto;
  }
`;

const MenuLogoWrap = styled.div`
  width: 135px;
  height: 45px;
  /* padding-top: 5px; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
  align-self:center;
`;

const LogoBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const LinksWrap = styled.div`
  height: 40px;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 0 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #e7dfd2;
  border-bottom: 1px solid #e7dfd2;
  @media (max-width: 768px) {
    display: ${(props) =>
      props.mobileMenuOpen ? "flex" : "none"};
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #e5e5e5;
    border-radius: 10px;
    width: 60%;
    margin-top: 6px;
    margin-left: 0;
    padding: 2%;
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
  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const MobileMenu = styled.img`
  height: 35px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    
  }
`;

const MobileTimerLogo = styled(TimerLogoImg)`
  display: none;
  align-self:center;
  @media (max-width: 768px) {
    display: block;
  }
`;

export default Header;
