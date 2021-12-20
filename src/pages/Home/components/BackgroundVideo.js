import { useState } from "react";
import styled from "styled-components";
import Vimeo from "@u-wave/react-vimeo";
import ReactLoading from "react-loading";
import { centerStyle } from "../../../components/SubElements";

const Video = styled((props) => <Vimeo {...props} />)`
  object-fit: cover;
  width: 100%;
  z-index: -1;
  @media (max-width: 1024px) {
    width: 150%;
  }
  @media (max-width: 767px) {
    width: 100%;
    position: absolute;
    top: 5%;
  }
`;

function BackgroundVideo() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div style={centerStyle}>
          <ReactLoading color="#FBD850" type="spinningBubbles" />
        </div>
      )}
      <Video
        background={true}
        loop={true}
        responsive={true}
        video="139500258"
        onReady={() => setIsLoading(false)}
      />
    </>
  );
}

export default BackgroundVideo;
