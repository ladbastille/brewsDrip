import styled from "styled-components";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import TasteNotes from "./pages/TasteNotes";
import CoffeeMap from "./pages/CoffeeMap";
import CoffeeTimer from "./pages/CoffeeTimer";
import Shop from "./pages/Shop";
import Login from "./pages/Login";

const AppDiv = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <AppDiv>
        <Header />

        <Route path="/tutorials" exact component={Tutorials} />
        <Route path="/tastenotes" exact component={TasteNotes} />
        <Route path="/coffeemap" exact component={CoffeeMap} />
        <Route path="/coffeetimer" exact component={CoffeeTimer} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact>
          <Home />
        </Route>
      </AppDiv>
      <Footer />
    </>
  );
}

export default App;
