import {
  TutorialsArticleDiv,
  ArticleCardListDiv,
  ArticleCardListH3,
  ArticleCardListText,
} from "./components/TutorialsStyledComponents";

const TutorialsB02 = () => {
  return (
    <TutorialsArticleDiv>
      <ArticleCardListDiv>
        <ArticleCardListH3>How to brew at home: Kalita Wave</ArticleCardListH3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1wehPbivN0k?start=00"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <ArticleCardListText>
          Learn how to brew delicious coffee at home! Today, we're featuring the
          Kalita Wave in our step-by-step guide. The wave-shaped brewer is built
          for even extraction and immersion while making it easy to play with
          brew ratios and contact time to pull out whatever flavor profiles
          maximize the cup.
        </ArticleCardListText>
      </ArticleCardListDiv>
    </TutorialsArticleDiv>
  );
};

export default TutorialsB02;
