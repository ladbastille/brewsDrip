import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FooterLogoImg from "../images/logo_225x50.svg";
import MobileFooterLogoImg from "../images/footer3DLogo.png";
import { LogoImg } from "./Header";
import { TutorialsBtn, BtnLink } from "../pages/Home";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const menu = [
  {
    name: "Coffee Tutorials",
    links: [
      { title: "Drinks", url: "/tutorials" },
      { title: "Equipments", url: "/tutorials" },
      { title: "Origins", url: "/tutorials" },
    ],
  },
  {
    name: "Taste Note",
    links: [
      { title: "Flavor Tag", url: "/tasteNotes" },
      { title: "My Note", url: "/tasteNotes" },
      { title: "Badges", url: "/tasteNotes" },
    ],
  },
  {
    name: "Online Shop",
    links: [
      { title: "New Item", url: "/shop" },
      { title: "Must-have", url: "/shop" },
    ],
  },
  {
    name: "Coffee Map",
    links: [
      { title: "World Coffee", url: "/coffeemap" },
      { title: "Taiwan", url: "/coffeemap" },
    ],
  },
  {
    name: "About Us",
    links: [
      { title: "Story", url: "/" },
      { title: "Contact Us", url: "mail-to:liko0165@gmail.com" },
    ],
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <Link to="/">
          <FooterLogo path="/" src={FooterLogoImg} />
        </Link>
        <Link to="/">
          <MobileFooterLogo path="/" src={MobileFooterLogoImg} />
        </Link>

        <FooterLinksWrap>
          {menu.map(({ name, links }) => (
            <Menu>
              <MenuHead>{name}</MenuHead>
              {links.map(({ title, url }) => (
                <MenuLink to={url}>{title}</MenuLink>
              ))}
            </Menu>
          ))}
        </FooterLinksWrap>
        <FooterCTABtnWrap>
          <BtnLink>
            <FooterCTABtn>Sign In</FooterCTABtn>
          </BtnLink>
          <BtnLink>
            <FooterCTABtn color={"#7E876D"}>Sign Up</FooterCTABtn>
          </BtnLink>
        </FooterCTABtnWrap>
      </FooterContentContainer>

      <FooterContentContainer>
        <h5>© brewsDrip, Inc. 2021. We love coffee!</h5>

        <SNSLinksWrap>
          <h6>Share</h6>
          <BtnLink to="/">
            <FaFacebook path="/" size="30px" />
          </BtnLink>
          <BtnLink to="/">
            <FaInstagram path="/" size="30px" />
          </BtnLink>
        </SNSLinksWrap>
      </FooterContentContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fbd850;
  border-radius: 3px;
  display: inline-block;
  /* margin-bottom:0.1rem; */

  /* &:hover {
    box-shadow: 0 14px 14px rgba(0, 0, 0, 0.25)
    , 0 10px 10px rgba(0, 0, 0, 0.22);
  } */
`;

const FooterContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: #939597 1px solid;
  h5 {
    margin-left: 3%;
    margin-top: 10px;
    color: #646464;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const FooterLogo = styled(LogoImg)`
  height: 50px;
  margin: 15%;
  display: block;

  @media (max-width: 1024px) {
    height: 35px;
    margin: 2%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileFooterLogo = styled(LogoImg)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    height: 60px;
    margin: 3%;
  }

  @media (max-width: 425px) {
    margin: 2% auto;
  }
`;

const Menu = styled.div`
  margin-bottom: 20px;
  margin-left: 2rem;
  @media (max-width: 1024px) {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    margin-bottom: 5px;
  }

  @media (max-width: 425px) {
    width: 40%;
    margin-left: 2%;
  }
`;

const MenuHead = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 0.9rem;
  font-weight: 800;
  line-height: 1.11;
  color: #000000;
  @media (max-width: 425px) {
    width: 100%;
    font-size: 1.2rem;
  }
`;

const MenuLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 0.3rem;
  font-weight: 500;
  line-height: 1.8;
  color: #646464;
  @media (max-width: 425px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

const FooterLinksWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;
  @media (max-width: 1024px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

const FooterCTABtn = styled(TutorialsBtn)`
  padding: 10px 40px;
  max-width: 80px;
  text-align: center;
  background: ${(props) => (props.color ? props.color : "#de6932")};
  &:hover {
    border-color: ${(props) => (props.color ? props.color : "#de6932")};
  }
`;

const FooterCTABtnWrap = styled(FooterLinksWrap)`
  flex-direction: column;
  justify-content: center;
  margin-right: 2%;
  @media (max-width: 1024px) {
    flex-direction: row;
  }
`;

const SNSLinksWrap = styled(FooterLinksWrap)`
  display: flex;
  flex-wrap: no-wrap;
  margin-top: 10px;

  height: 40px;
  @media (max-width: 1024px) {
    justify-content: flex-end;
  }
  h6 {
    margin-right: 20px;
    color: #646464;
  }
  a {
    margin-right: 30px;
    &:visited {
      color: #000000;
    }
  }
`;
