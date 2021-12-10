import { useState } from "react";
import styled from "styled-components";
import Vimeo from "@u-wave/react-vimeo";
import ReactLoading from "react-loading";

const Video = styled((props) => <Vimeo {...props} />)`
  object-fit: cover;
  width: 100%;
  z-index: -1;
  @media (max-width: 1024px) {
    width: 150%;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;

function BackgroundVideo() {
  const [isLoading, setIsLoading] = useState(true);
  const centerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
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
