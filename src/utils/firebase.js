import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const apiKey = process.env.REACT_APP_API_KEY;
const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
const projectId = process.env.REACT_APP_PROJECT_ID;
const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_APP_MESSANGING_SENDER_ID;
const appId = process.env.REACT_APP_APP_ID;
const measurementId = process.env.REACT_APP_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

firebase.initializeApp(firebaseConfig);

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const socialMediaAuth = async (provider) => {
  return await firebase.auth().signInWithPopup(provider);
};

export const signUpWithEmailPassword = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signInWithEmailPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const getAuthDocumentRef = (collectionName, currentUser) => {
  firebase
    .firestore()
    .collection(collectionName)
    .doc(firebase.auth().currentUser.uid);
};

export const createSignUpDataObj = {
  createdAt: firebase.firestore.Timestamp.now(),
  displayName: firebase.auth().currentUser?.displayName || "Coffee Lover",
  photoURL:
    "https://firebasestorage.googleapis.com/v0/b/brewsdrip.appspot.com/o/user-pics%2FdefaultUser.png?alt=media&token=7e5e71c8-aabb-4bdd-a55c-72ec3659b41d",
  uid: firebase.auth().currentUser?.uid,
  email: firebase.auth().currentUser?.email,
};

export const getCollections = (collectionName, currentUser, setContents) => {
  firebase
    .firestore()
    .collection(collectionName)
    .where("author.uid", "==", currentUser?.uid)
    .orderBy("createdAt", "desc")
    .onSnapshot((collectionSnapshot) => {
      const data = collectionSnapshot.docs.map((docSnapshot) => {
        const id = docSnapshot.id;
        return { ...docSnapshot.data(), id };
      });
      setContents(data);
    });
};

export default firebase;
