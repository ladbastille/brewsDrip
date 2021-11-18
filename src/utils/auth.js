import firebase from "./firebase";
import "firebase/auth";

// const socialMediaAuth = (provider) => {
//   return firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((res) => {
//       return res.user;
//     })
//     .catch((er) => {
//       return er;
//     });
// };

const socialMediaAuth = async (provider) => {
  return await firebase.auth().signInWithPopup(provider);
};

export default socialMediaAuth;
