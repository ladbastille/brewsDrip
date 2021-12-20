import { useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import firebase from "./utils/firebase";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Timer from "./pages/CoffeeTimer/Timer";
import Login from "./pages/MemberAndLogin/Login";
import Member from "./pages/MemberAndLogin/Member";
import AllTimerList, {
  TimerListContainer,
} from "./pages/CoffeeTimer/AllTimerList";
import MyTimers from "./pages/CoffeeTimer/MyTimers";
import NewTimer from "./pages/CoffeeTimer/NewTimer";
import CollectedTimer from "./pages/CoffeeTimer/CollectedTimer";
import DefaultTimer from "./pages/CoffeeTimer/DefaultTimer";
import NewNote from "./pages/CoffeeTasteNote/NewNote";
import TasteNote from "./pages/CoffeeTasteNote/TasteNote";
import TimerListMenu from "./pages/CoffeeTimer/components/TimerListMenu";
import NotFound from "./pages/NotFound";
import AllNoteList, {
  NoteListContainer,
} from "./pages/CoffeeTasteNote/AllNoteList";
import MyNotes from "./pages/CoffeeTasteNote/MyNotes";
import CollectedNote from "./pages/CoffeeTasteNote/CollectedNote";
import NoteListMenu from "./pages/CoffeeTasteNote/components/NoteListMenu";
import TutorialsIndex from "./pages/Tutorials/TutorialsIndex";
import TutorialsCulture from "./pages/Tutorials/TutorialsCulture";
import TutorialsC01 from "./pages/Tutorials/TutorialsC01";
import TutorialsC02 from "./pages/Tutorials/TutorialsC02";
import TutorialsDrink from "./pages/Tutorials/TutorialsDrink";
import TutorialsD01 from "./pages/Tutorials/TutorialsD01";
import TutorialsD02 from "./pages/Tutorials/TutorialsD02";
import TutorialsBrew from "./pages/Tutorials/TutorialsBrew";
import TutorialsB01 from "./pages/Tutorials/TutorialsB01";
import TutorialsB02 from "./pages/Tutorials/TutorialsB02";
import TutorialsB03 from "./pages/Tutorials/TutorialsB03";
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
