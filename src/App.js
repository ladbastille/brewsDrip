import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import TasteNotes from "./pages/TasteNote";
import CoffeeMap from "./pages/CoffeeMap";
import CoffeeTimer from "./pages/CoffeeTimer";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Member from "./pages/Member";
import firebase from "./utils/firebase";
import AllTimerList,{TimerListContainer} from "./pages/AllTimerList";
import MyTimers from "./pages/MyTimers";
import NewTimer from "./pages/NewTimer";
import CollectedTimer from "./pages/CollectedTimer";
import DefaultTimer from "./pages/DefaultTimer";
import TasteNoteList from "./pages/TasteNoteList";
import NewNote from "./pages/NewNote";
import TasteNote from "./pages/TasteNote";
import TimerListMenu from "./components/TimerListMenu";

const AppDiv = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [user, setUser] = useState();

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
        {/* <Route path="/tastenotelist/taste" exact component={TasteNoteList} />
        <Route path="/tastenotelist/favs" exact component={TasteNoteList} />
        <Route path="/tastenotelist/brew" exact component={TasteNoteList} /> */}
        <Route path="/coffeemap" exact component={CoffeeMap} />
        <Route path="/tastenotelist" exact component={TasteNoteList} />
        <Route path="/newnote">
          {user !== null ? <NewNote user={user} /> : <Redirect to="/login" />}
        </Route>
              <Route path="/timer/:timerId" exact>
                <CoffeeTimer />
              </Route>
        <Route path="/timerlist">
          <TimerListContainer>
            <TimerListMenu />
            <Switch>
              <Route path="/timerlist" exact>
                <AllTimerList user={user} />
              </Route>
              <Route path="/timerlist/mytimers" exact>
              {user !== null ? <MyTimers user={user}/>: <Redirect to="/login" />}
              </Route>
              <Route path="/timerlist/collected" exact>
              {user !== null ? <CollectedTimer user={user}/>: <Redirect to="/login" />}
              </Route>
              <Route path="/timerlist/default" exact>
                <DefaultTimer />
              </Route>
            </Switch>
          </TimerListContainer>
        </Route>

        <Route path="/tastenotelist/:noteId" exact>
          <TasteNote />
        </Route>
        {/* <Route path="/coffeetimer" exact component={CoffeeTimer} /> */}
        {/* <Route path="/shop" exact component={Shop} /> */}

        <Route path="/newtimer">
          {user !== null ? <NewTimer user={user} /> : <Redirect to="/login" />}
        </Route>

        <Route path="/member">
          {user !== null ? <Member user={user} /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" exact>
          {user !== null ? <Redirect to="/member" /> : <Login user={user} />}
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
