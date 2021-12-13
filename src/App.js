import { useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import firebase from "./utils/firebase";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Timer from "./pages/Timer";
import Login from "./pages/Login";
import Member from "./pages/Member";
import AllTimerList, { TimerListContainer } from "./pages/AllTimerList";
import MyTimers from "./pages/MyTimers";
import NewTimer from "./pages/NewTimer";
import CollectedTimer from "./pages/CollectedTimer";
import DefaultTimer from "./pages/DefaultTimer";
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
import { getCurrentUser } from "./redux/action";

function App() {
  const user = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(
    () => {
      const unsub = firebase.auth().onAuthStateChanged((currentUser) => {
        dispatch(getCurrentUser(currentUser));
      });

      return unsub;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route path="/tutorials" exact component={TutorialsIndex} />
            <Route path="/tutorials/brew" exact component={TutorialsBrew} />
            <Route path="/tutorials/brew/b01" exact component={TutorialsB01} />
            <Route path="/tutorials/brew/b02" exact component={TutorialsB02} />
            <Route path="/tutorials/brew/b03" exact component={TutorialsB03} />
            <Route path="/tutorials/drink" exact component={TutorialsDrink} />
            <Route path="/tutorials/drink/d01" exact component={TutorialsD01} />
            <Route path="/tutorials/drink/d02" exact component={TutorialsD02} />
            <Route
              path="/tutorials/culture"
              exact
              component={TutorialsCulture}
            />
            <Route
              path="/tutorials/culture/c01"
              exact
              component={TutorialsC01}
            />
            <Route
              path="/tutorials/culture/c02"
              exact
              component={TutorialsC02}
            />

            <Route path="/newnote">
              {user !== null ? <NewNote /> : <Redirect to="/login" />}
            </Route>
            <Route path="/timer/:timerId" exact>
              <Timer />
            </Route>

            <Route path="/timerlist">
              <TimerListContainer>
                <TimerListMenu />
                <Switch>
                  <Route path="/timerlist" exact>
                    <AllTimerList />
                  </Route>
                  <Route path="/timerlist/mytimers" exact>
                    {user !== null ? <MyTimers /> : <Redirect to="/login" />}
                  </Route>
                  <Route path="/timerlist/collected" exact>
                    {user !== null ? (
                      <CollectedTimer />
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
                    <AllNoteList />
                  </Route>
                  <Route path="/tastenotelist/mynotes" exact>
                    {user !== null ? <MyNotes /> : <Redirect to="/login" />}
                  </Route>
                  <Route path="/tastenotelist/collected" exact>
                    {user !== null ? (
                      <CollectedNote />
                    ) : (
                      <Redirect to="/login" />
                    )}
                  </Route>
                </Switch>
              </NoteListContainer>
            </Route>

            <Route path="/newtimer">
              {user !== null ? <NewTimer /> : <Redirect to="/login" />}
            </Route>

            <Route path="/member">
              {user !== null ? <Member /> : <Redirect to="/login" />}
            </Route>
            <Route path="/login" exact>
              {user !== null ? <Redirect to="/member" /> : <Login />}
            </Route>

            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
