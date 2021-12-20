import {
  FaPlayCircle,
  FaRegPauseCircle,
  FaStop,
  FaRedoAlt,
} from "react-icons/fa";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import { FiShare2 } from "react-icons/fi";
import { BiLinkAlt } from "react-icons/bi";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import {
  FacebookShareButton,
  LineShareButton,
  FacebookIcon,
  LineIcon,
} from "react-share";
import {
  Flex90BetweenWrap,
  Flex100CenterWrap,
  StyledIconDiv,
  ShareBtnDiv,
} from "../../../components/ContainerAndWrap";
import { ControlBtn, StyledIconDivSound } from "./TimerStyledComponents";

const renderTimerControl = (
  isActive,
  resetTimer,
  handlePressStop,
  startTimer,
  isShareClick,
  setIsShareClick,
  onShareWindowClose,
  handleCopyUrl,
  isMuted,
  setIsMuted,
  isCollected,
  toggleCollect
) => {
  return (
    <>
      <Flex90BetweenWrap margin={"4%"}>
        <ControlBtn
          disabled={isActive ? "disabled" : ""}
          onClick={() => resetTimer()}
        >
          <FaRedoAlt color="#FFFFFF" size="1.5rem" />
        </ControlBtn>
        <ControlBtn
          disabled={!isActive ? "disabled" : ""}
          onClick={handlePressStop}
        >
          <FaStop color="#FFFFFF" size="1.5rem" />
        </ControlBtn>
      </Flex90BetweenWrap>

      <Flex100CenterWrap>
        <StyledIconDiv onClick={startTimer}>
          {!isActive ? (
            <FaPlayCircle color="#FFFFFF" size="6rem" />
          ) : (
            <FaRegPauseCircle color="#FFFFFF" size="6rem" />
          )}
        </StyledIconDiv>
      </Flex100CenterWrap>

      <Flex90BetweenWrap margin={"4%"}>
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
                quote={"I've found an awesome coffee timer. Let's try it!"}
                hashtag={["brewsDrip", "YourBestCoffeePal"]}
                onShareWindowClose={onShareWindowClose}
              >
                <FacebookIcon size={25} round />
              </FacebookShareButton>
              <LineShareButton
                url={window.location.href}
                title={"I've found an awesome coffee timer. Let's try it!"}
                onShareWindowClose={onShareWindowClose}
              >
                <LineIcon size={25} round />
              </LineShareButton>
              <BiLinkAlt size={25} color={"#FFFFFF"} onClick={handleCopyUrl} />
            </ShareBtnDiv>
          )}
        </StyledIconDiv>

        <StyledIconDivSound>
          {!isMuted ? (
            <GiSoundOn
              color={"white"}
              size={"2rem"}
              onClick={() => setIsMuted(true)}
            />
          ) : (
            <GiSoundOff
              color={"white"}
              size={"2rem"}
              onClick={() => setIsMuted(false)}
            />
          )}
        </StyledIconDivSound>

        <StyledIconDiv>
          {!isCollected ? (
            <IoBookmarkOutline
              color={"white"}
              size={"1.5rem"}
              onClick={() => toggleCollect(isCollected, "collectedBy")}
            />
          ) : (
            <IoBookmark
              color={"white"}
              size={"1.5rem"}
              onClick={() => toggleCollect(isCollected, "collectedBy")}
            />
          )}
        </StyledIconDiv>
      </Flex90BetweenWrap>
    </>
  );
};

export default renderTimerControl;
