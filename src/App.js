import React,{useEffect} from "react";
import styled from "styled-components";
import { Route,Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import TasteNotes from "./pages/TasteNotes";
import CoffeeMap from "./pages/CoffeeMap";
import CoffeeTimer from "./pages/CoffeeTimer";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Member from "./pages/Member"
import firebase from "./utils/firebase";
import TimerList from "./pages/TimerList";
import NewTimer from './pages/NewTimer'

const AppDiv = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [user, setUser] = React.useState();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);
  return (
    <>
      <AppDiv>
        <Header />

        <Route path="/tutorials" exact component={Tutorials} />
        <Route path="/tastenotes" exact component={TasteNotes} />
        <Route path="/coffeemap" exact component={CoffeeMap} />
        <Route path="/timerlist" exact component={TimerList} />
        <Route path="/timerlist/:timerid" exact>
          Hello, Timer
        </Route>
        <Route path="/newtimer" exact component={NewTimer} />
        <Route path="/coffeetimer" exact component={CoffeeTimer} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/member" >
          {user !== null ?  <Member user={user}/> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" exact>
        {user !== null ?  <Redirect to="/member" /> : <Login user={user}/>}
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>
      </AppDiv>
      <Footer />
    </>
  );
}

export default App;
