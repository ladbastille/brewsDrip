import React,{useState} from "react";
import {useSelector} from "react-redux"
import styled from "styled-components";
import { Link } from "react-router-dom"
import Swal from "sweetalert2";
import FooterLogoImg from "../images/logo_225x50.svg";
import MobileFooterLogoImg from "../images/footer3DLogo.png";
import { LogoImg } from "./Header";
import { TutorialsBtn } from "../pages/Home";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import {
  ShareBtnDiv,
} from "../pages/Timer";
import {
  FacebookShareButton,
  LineShareButton,
  FacebookIcon,
  LineIcon,
} from "react-share";

const FooterContainer = styled.div`
  font-family: "Poppins", sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fbd850;
  border-radius: 3px;
  display: inline-block;
  padding-top: 1rem;
  margin-top: 1rem;
`;

const FooterContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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

const FooterLinksWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  @media (max-width: 1024px) {
    justify-content: center;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 3%;
  }
`;

const BtnLink = styled(Link)`
  margin-top: 5px;
`;

export const FooterCTABtn = styled(TutorialsBtn)`
  padding: 10px 40px;
  margin-top: 10px;
  margin-right: 10px;
  text-align: center;
  background: ${(props) => (props.color ? props.color : "#de6932")};
  border: ${(props) => (props.border ? props.border : "2px solid transparent")};

  &:hover {
    border-color: ${(props) => props.color};
  }
  & a {
    color: #ffffff;
  }
  & a:visited {
    color: #ffffff;
  }

  &:hover a {
    color: #000000;
  }
  @media (max-width: 375px) {
    padding: 10px 30px;
  }
`;

const FooterCTABtnWrap = styled(FooterLinksWrap)`
  flex-direction: column;
  justify-content: space-evenly;
  margin: 2%;
  @media (max-width: 1024px) {
    flex-direction: row;
  }
  @media (max-width: 375px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const SNSLinksWrap = styled(FooterLinksWrap)`
  display: flex;
  flex-wrap: no-wrap;
  margin-top: 10px;
  margin-right:3%;
  height: 40px;
  @media (max-width: 1024px) {
    justify-content: flex-end;
  }
  h6 {
    margin-right: 20px;
    margin-bottom:5px;
    color: #646464;
  }
`;

const FooterShareBtnDiv=styled(ShareBtnDiv)`
@media (max-width:768px){
  margin-top:20px
}
`

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
  {
    name: "About Us",
    links: [
      { title: "Story", url: "/" },
      { title: "Contact Us", url: "mail-to:liko0165@gmail.com" },
    ],
  },
];

const Footer = () => {
  const [isShareClick, setIsShareClick] = useState(false);
  const currentUser = useSelector((state)=>state.currentUser)
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    Swal.fire("Go share now!", "You've copied the URL!", "success");
    setIsShareClick((prev) => !prev);
  };

  const onShareWindowClose = () => {
    Swal.fire("Awesome!", "Thank you for sharing this tastenote!", "success");
    setIsShareClick((prev) => !prev);
  };
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
            <Menu key={uuidv4()}>
              <MenuHead key={uuidv4()}>{name}</MenuHead>
              {links.map(({ title, url }) => (
                <MenuLink key={uuidv4()} to={url}>
                  {title}
                </MenuLink>
              ))}
            </Menu>
          ))}
        </FooterLinksWrap>

        <FooterCTABtnWrap>
          {currentUser ? (
            <>
              <BtnLink to="/member">
                <FooterCTABtn>Member</FooterCTABtn>
              </BtnLink>
              <BtnLink to="/member">
                <FooterCTABtn color={"transparent"}>Logout</FooterCTABtn>
              </BtnLink>
            </>
          ) : (
            <>
              <FooterCTABtn>
                <BtnLink to="/login">Sign In</BtnLink>
              </FooterCTABtn>
              <FooterCTABtn color={"#7E876D"}>
                <BtnLink to="/login">Sign Up</BtnLink>
              </FooterCTABtn>
            </>
          )}
        </FooterCTABtnWrap>
      </FooterContentContainer>

      <FooterContentContainer>
        <h5>© brewsDrip, Inc. 2021. We love coffee!</h5>
        <SNSLinksWrap>
          <h6>Share</h6>
          <FooterShareBtnDiv>
                <FacebookShareButton
                  url={window.location.href}
                  quote={"I've created a coffee tastenote. Take a look!"}
                  hashtag={["brewsDrip", "YourBestCoffeePal"]}
                  onShareWindowClose={onShareWindowClose}
                >
                  <FacebookIcon size={25} round />
                </FacebookShareButton>
                <LineShareButton
                  url={window.location.href}
                  title={"I've created a coffee tastenote. Take a look!"}
                  onShareWindowClose={onShareWindowClose}
                >
                  <LineIcon size={25} round />
                </LineShareButton>
                <BiLinkAlt
                  size={25}
                  color={"#FFFFFF"}
                  onClick={handleCopyUrl}
                />
              </FooterShareBtnDiv>
          
        </SNSLinksWrap>
      </FooterContentContainer>
    </FooterContainer>
  );
};

export default Footer;
