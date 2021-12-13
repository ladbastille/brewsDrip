import {
  TutorialsArticleDiv,
  ArticleCardListDiv,
  ArticleCardListH3,
  ArticleCardListText,
} from "./components/TutorialsComponents";

const TutorialsB01 = () => {
  return (
    <>
      <TutorialsArticleDiv>
        <ArticleCardListDiv>
          <ArticleCardListH3>
            How to brew at home (or on the go): AeroPress
          </ArticleCardListH3>

          <iframe
            src="https://player.vimeo.com/video/480909965"
            width="640"
            height="360"
            frameBorder="0"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowFullScreen=""
            title="How to brew at home (or on the go): AeroPress"
          ></iframe>
          <ArticleCardListText>
            Learn how to brew delicious coffee at home! Today, we're featuring
            the Kalita Wave in our step-by-step guide. The wave-shaped brewer is
            built for even extraction and immersion while making it easy to play
            with brew ratios and contact time to pull out whatever flavor
            profiles maximize the cup.
          </ArticleCardListText>
        </ArticleCardListDiv>
      </TutorialsArticleDiv>
    </>
  );
};

export default TutorialsB01;
