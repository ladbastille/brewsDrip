import { useState } from "react";
import firebase from "../utils/firebase";
import {useHistory} from 'react-router-dom'

function Member() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const toLogOut = () => {
    setIsLoading(true);
    firebase.auth().signOut();
    history.push("/login");
    setIsLoading(false);
  };
  return (
    <>
      <h5>This is member page!</h5>
      <div>You've logged in.</div>
      <button onClick={toLogOut}>Logout</button>
      {isLoading ? (
        <ReactLoading color="#FBD850" type="spinningBubbles" />
      ) : (
        <></>
      )}
    </>
  );
}

export default Member;
