import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TasteNotes from "./pages/TasteNote";
import CoffeeMap from "./pages/CoffeeMap";
import Timer from "./pages/Timer";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Member from "./pages/Member";
import firebase from "./utils/firebase";
import AllTimerList, { TimerListContainer } from "./pages/AllTimerList";
import MyTimers from "./pages/MyTimers";
import NewTimer from "./pages/NewTimer";
import CollectedTimer from "./pages/CollectedTimer";
import DefaultTimer from "./pages/DefaultTimer";
import TasteNoteList from "./pages/TasteNoteList";
import NewNote from "./pages/NewNote";
import TasteNote from "./pages/TasteNote";
import TimerListMenu from "./pages/TimerListMenu";
import NotFound from "./pages/NotFound";
import AllNoteList, { NoteListContainer } from "./pages/AllNoteList";
import MyNotes from "./pages/MyNotes";
import CollectedNote from "./pages/CollectedNote";
import NoteListMenu from "./pages/NoteListMenu";
import TutorialsIndex from "./pages/TutorialsIndex";
import TutorialsCulture from "./pages/TutorialsCulture";
import TutorialsC01 from "./pages/TutorialsC01";
import TutorialsC02 from "./pages/TutorialsC02";
import TutorialsDrink from "./pages/TutorialsDrink";
import TutorialsD01 from "./pages/TutorialsD01";
import TutorialsD02 from "./pages/TutorialsD02";
import TutorialsBrew from "./pages/TutorialsBrew";
import TutorialsB01 from "./pages/TutorialsB01";
import TutorialsB02 from "./pages/TutorialsB02";
import TutorialsB03 from "./pages/TutorialsB03";

const AppDiv = styled.div`
  width: 100%;
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
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <AppDiv>
              <Header />

              <Route path="/tutorials" exact component={TutorialsIndex} />
              <Route path="/tutorials/brew" exact component={TutorialsBrew} />
              <Route
                path="/tutorials/brew/b01"
                exact
                component={TutorialsB01}
              />
              <Route
                path="/tutorials/brew/b02"
                exact
                component={TutorialsB02}
              />
              <Route
                path="/tutorials/brew/b03"
                exact
                component={TutorialsB03}
              />
              <Route path="/tutorials/drink" exact component={TutorialsDrink} />
              <Route
                path="/tutorials/brew/d01"
                exact
                component={TutorialsD01}
              />
              <Route
                path="/tutorials/brew/d02"
                exact
                component={TutorialsD02}
              />
              <Route
                path="/tutorials/culture"
                exact
                component={TutorialsCulture}
              />
              <Route
                path="/tutorials/brew/c01"
                exact
                component={TutorialsC01}
              />
              <Route
                path="/tutorials/brew/c02"
                exact
                component={TutorialsC02}
              />
              {/* <Route path="/tastenotelist/taste" exact component={TasteNoteList} />
        <Route path="/tastenotelist/favs" exact component={TasteNoteList} />
        <Route path="/tastenotelist/brew" exact component={TasteNoteList} /> */}
              <Route path="/coffeemap" exact component={CoffeeMap} />
              {/* <Route path="/tastenotelist" exact component={TasteNoteList} /> */}
              <Route path="/newnote">
                {user !== null ? (
                  <NewNote user={user} />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>
              <Route path="/timer/:timerId" exact>
                <Timer user={user} />
              </Route>

              <Route path="/timerlist">
                <TimerListContainer>
                  <TimerListMenu />
                  <Switch>
                    <Route path="/timerlist" exact>
                      <AllTimerList user={user} />
                    </Route>
                    <Route path="/timerlist/mytimers" exact>
                      {user !== null ? (
                        <MyTimers user={user} />
                      ) : (
                        <Redirect to="/login" />
                      )}
                    </Route>
                    <Route path="/timerlist/collected" exact>
                      {user !== null ? (
                        <CollectedTimer user={user} />
                      ) : (
                        <Redirect to="/login" />
                      )}
                    </Route>
                    <Route path="/timerlist/default" exact>
                      <DefaultTimer />
                    </Route>
                  </Switch>
                </TimerListContainer>
              </Route>

              <Route path="/tastenote/:noteId" exact>
                <TasteNote />
              </Route>

              <Route path="/tastenotelist">
                <NoteListContainer>
                  <NoteListMenu />
                  <Switch>
                    <Route path="/tastenotelist" exact>
                      <AllNoteList user={user} />
                    </Route>
                    <Route path="/tastenotelist/mynotes" exact>
                      {user !== null ? (
                        <MyNotes user={user} />
                      ) : (
                        <Redirect to="/login" />
                      )}
                    </Route>
                    <Route path="/tastenotelist/collected" exact>
                      {user !== null ? (
                        <CollectedNote user={user} />
                      ) : (
                        <Redirect to="/login" />
                      )}
                      {/* <Route path="/tastenotelist/default" exact>
                <DefaultNote />
              </Route> */}
                    </Route>
                  </Switch>
                </NoteListContainer>
              </Route>

              <Route path="/newtimer">
                {user !== null ? (
                  <NewTimer user={user} />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>

              <Route path="/member">
                {user !== null ? (
                  <Member user={user} />
                ) : (
                  <Redirect to="/login" />
                )}
              </Route>
              <Route path="/login" exact>
                {user !== null ? (
                  <Redirect to="/member" />
                ) : (
                  <Login user={user} />
                )}
              </Route>

              <Route path="/" exact>
                <Home />
              </Route>

              {/* <Route path="*">
                <NotFound />
              </Route> */}
              <Footer user={user} />
            </AppDiv>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
      ,
    </>
  );
}

export default App;
