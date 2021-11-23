import { useState } from "react";
import styled from "styled-components";
import Vimeo from "@u-wave/react-vimeo";
import ReactLoading from "react-loading";

export default function BackgroundVideo() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && <ReactLoading color="#FBD850" type="spinningBubbles" />}
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
