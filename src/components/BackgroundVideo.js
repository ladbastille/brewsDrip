import styled from "styled-components"
import Vimeo from "@u-wave/react-vimeo"

export default function BackgroundVideo() {
  return (
    
        <Video
          background={true}
          loop={true}
          responsive={true}
          video="139500258"
        />
    
  )
}

const Video = styled(props => <Vimeo {...props} />)`
  
  object-fit: cover;
  width: 70%;
  height: 100%;
  position: fixed;
  z-index: -1;
  margin-left: 25%;
`