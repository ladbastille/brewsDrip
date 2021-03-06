import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BiLinkAlt } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import {
  FacebookShareButton,
  LineShareButton,
  FacebookIcon,
  LineIcon,
} from "react-share";
import FooterLogoImg from "../images/logo_225x50.svg";
import MobileFooterLogoImg from "../images/footer3DLogo.png";
import { LogoImg } from "./Header";
import {
  FooterContainer,
  FooterContentContainer,
  FooterLinksWrap,
  SNSLinksWrap,
  FooterCTABtnWrap,
  FooterShareBtnDiv,
} from "./ContainerAndWrap";

import {CTABtn} from "./SubElements"

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
  }
`;

const MenuLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.8;
  color: #646464;
  @media (max-width: 425px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

const ContactA = styled.a`
  cursor: pointer;
  display: block;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.8;
  color: #646464;
  @media (max-width: 425px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

const BtnLink = styled(Link)`
  margin-top: 5px;
`;

const LogoutBtnLink = styled(Link)`
  @media (min-width: 1280px) {
    margin-top: 15px;
  }
`;

const FooterLogoutBtn = styled(CTABtn)`
  margin-left: 6px;
  margin-top: 12px;
`;

const menu = [
  {
    name: "Coffee Tutorials",
    links: [
      { title: "Brew", url: "/tutorials/brew" },
      { title: "Drink", url: "/tutorials/drink" },
      { title: "Culture", url: "/tutorials/culture" },
    ],
  },
  {
    name: "Taste Note",
    links: [
      { title: "All", url: "/tastenotelist" },
      { title: "My Note", url: "/tastenotelist/mynotes" },
    ],
  },
  {
    name: "Coffee Timer",
    links: [
      { title: "All", url: "/timerlist" },
      { title: "Default", url: "/timerlist/default" },
      { title: "My Timer", url: "/timerlist/mytimers" },
    ],
  },
];

const Footer = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    Swal.fire("Go share now!", "You've copied the URL!", "success");
  };

  function handleContactClick() {
    window.open("https://github.com/ladbastille/brewsDrip", "_blank");
  }

  return (
    <FooterContainer>
      <FooterContentContainer>
        <Link to="/">
          <FooterLogo path="/" src={FooterLogoImg} alt="footerLogo"/>
        </Link>
        <Link to="/">
          <MobileFooterLogo path="/" src={MobileFooterLogoImg} alt="mobileFooterLogo"/>
        </Link>

        <FooterLinksWrap>
          {menu.map(({ name, links }) => (
            <Menu key={uuidv4()}>
              <MenuHead>{name}</MenuHead>
              {links.map(({ title, url }) => (
                <MenuLink key={uuidv4()} to={url}>
                  {title}
                </MenuLink>
              ))}
            </Menu>
          ))}
          <Menu>
            <MenuHead>About Us</MenuHead>
            <ContactA onClick={handleContactClick}>
              Story
            </ContactA>
            <ContactA onClick={handleContactClick}>
              Contact Us
            </ContactA>
          </Menu>
        </FooterLinksWrap>

        <FooterCTABtnWrap>
          {currentUser ? (
            <>
              <BtnLink to="/member">
                <CTABtn>Member</CTABtn>
              </BtnLink>
              <LogoutBtnLink to="/member">
                <FooterLogoutBtn color={"transparent"}>Logout</FooterLogoutBtn>
              </LogoutBtnLink>
            </>
          ) : (
            <>
              <CTABtn>
                <BtnLink to="/login">Sign In</BtnLink>
              </CTABtn>
              <CTABtn color={"#7E876D"}>
                <BtnLink to="/login">Sign Up</BtnLink>
              </CTABtn>
            </>
          )}
        </FooterCTABtnWrap>
      </FooterContentContainer>

      <FooterContentContainer>
        <h5>?? brewsDrip, Inc. 2021. We love coffee!</h5>
        <SNSLinksWrap>
          <h6>Share</h6>
          <FooterShareBtnDiv>
            <FacebookShareButton
              url={window.location.href}
              quote={"I've found a great coffee pal. Take a look!"}
              hashtag={["brewsDrip", "YourBestCoffeePal"]}
            >
              <FacebookIcon size={25} round />
            </FacebookShareButton>
            <LineShareButton
              url={window.location.href}
              title={"I've found a great coffee pal. Take a look!"}
            >
              <LineIcon size={25} round />
            </LineShareButton>
            <BiLinkAlt size={25} color={"#FFFFFF"} onClick={handleCopyUrl} />
          </FooterShareBtnDiv>
        </SNSLinksWrap>
      </FooterContentContainer>
    </FooterContainer>
  );
};

export default Footer;
