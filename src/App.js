import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tutorials from "./pages/Tutorials";
import TasteNotes from "./pages/TasteNotes";
import CoffeeMap from "./pages/CoffeeMap";
import CoffeeTimer from "./pages/CoffeeTimer";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Member from "./pages/Member";
import firebase from "./utils/firebase";
import TimerList from "./pages/TimerList";
import NewTimer from "./pages/NewTimer";
import TasteNoteList from "./pages/TasteNoteList";
import NewNote from "./pages/NewNote"

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
        <Route path="/timerlist" exact component={TimerList} />
        <Route path="/timerlist/:timerid" exact>
          <CoffeeTimer />
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
