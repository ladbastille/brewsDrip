import styled from "styled-components";

export const TutorialsDiv = styled.div`
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-height: 50vh;
  background-color: #e5e5e5;
  margin-bottom: 10px;
  box-sizing: border-box;
  @media (max-width: 1280px) {
    flex-wrap: wrap;
    padding: 10px;
  }
`;

export const CardDiv = styled.div`
  width: 33.33.%;
  position: relative;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 1280px) {
    margin-bottom: 5px;
  }
`;

export const CategoryImg = styled.img`
  width: 350px;
  height: 550px;
  border: 6px solid #ffffff;
`;

export const CategoryH2 = styled.h2`
  color: #ffffff;
  font-size: 3rem;
  font-style: bolder;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const CardListImg = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
`;
export const CardListH3 = styled.h3`
  font-size: 28px;
  line-height: 1.25;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
export const CardListText = styled.p`
  margin-bottom: 24 px;
  margin: 0 0 15 px;
  padding: 0;
  font-size: 14px;
  line-height: 1.6;
`;

export const CardListDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  vertical-align: center;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  margin-top: 15px;
  margin-bottom: 25px;
  a,
  a:visited {
    color: #000000;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const TutorialsCardsDiv = styled.div`
  font-family: Poppins, Arial, Helvetica, sans-serif;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  min-height: 560px;
  box-sizing: border-box;
`;

export const TutorialsArticleDiv = styled.div`
  font-family: Poppins, Arial, Helvetica, sans-serif;
  padding: 20px;
  justify-content: space-around;
  width: 50%;
  min-height: 560px;
  @media (max-width: 1024px) {
    width: 80%;
    iframe {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    width: 80%;
    iframe {
      width: 100%;
      height: 300px;
    }
  }
  @media (max-width: 375px) {
    width: 80%;
    iframe {
      width: 100%;
      height: 200px;
    }
  }
`;

export const ArticleCardListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  vertical-align: center;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  a:visited {
    color: #000000;
  }
`;

export const ArticleCardListH3 = styled.h3`
  font-size: 28px;
  line-height: 1.25;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const ArticleCardListText = styled.p`
  margin: 20px 0 24px;
  padding: 0;
  font-size: 14px;
  line-height: 1.6;
`;

export const ArticleCardListImg = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
  width: ${(props) => props.width};
`;

export const ArticleCardListH4 = styled.h4`
  font-size: 20px;
  line-height: 24px;
  margin-bottom: ${(props) => props.marginbottom};
  color: ${(props) => props.color};
`;

export const ArticleCardListH5 = styled(ArticleCardListH4)`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const ArticleCultureCardListH4 = styled.h4`
  font-size: 20px;
  line-height: 24px;
  margin-bottom: ${(props) => props.marginbottom || "20px"};
  margin-top: ${(props) => props.margintop};
  color: ${(props) => props.color};
`;

export const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
