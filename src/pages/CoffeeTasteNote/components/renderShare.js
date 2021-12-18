import {
  FacebookShareButton,
  LineShareButton,
  FacebookIcon,
  LineIcon,
} from "react-share";
import { FiShare2 } from "react-icons/fi";
import { BiLinkAlt } from "react-icons/bi";
import {
  StyledIconDiv,
  ShareBtnDiv,
} from "../../../components/ContainerAndWrap";

const renderShare = (
  isShareClick,
  setIsShareClick,
  onShareWindowClose,
  handleCopyUrl
) => {
  return (
    <StyledIconDiv>
      <FiShare2
        color={"white"}
        size={"1.5rem"}
        onClick={() => setIsShareClick((prev) => !prev)}
      />
      {isShareClick && (
        <ShareBtnDiv>
          <FacebookShareButton
            url={window.location.href}
            quote={"I've created a coffee tastenote. Take a look!"}
            hashtag={"#brewsDrip"}
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
          <BiLinkAlt size={25} color={"#FFFFFF"} onClick={handleCopyUrl} />
        </ShareBtnDiv>
      )}
    </StyledIconDiv>
  );
};

export default renderShare;
