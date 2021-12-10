import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

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

export const userLogout = () => {
  firebase.auth().signOut();
};

export const getUserPhotoRef = (refName, currentUser) => {
  return firebase.storage().ref(refName + currentUser.uid);
};

export const getFileRef = (refName, documentRef) => {
  return firebase.storage().ref(refName + documentRef.id);
};

const firestore = firebase.firestore();

export const getAuthDocumentRef = (collectionName, currentUser) => {
  return firestore
    .collection(collectionName)
    .doc(firebase.auth().currentUser.uid);
};

export const getDocumentRef = (collectionName, id) => {
  return firestore.collection(collectionName).doc(id);
};

export const createSignUpDataObj = {
  createdAt: firebase.firestore.Timestamp.now(),
  displayName: firebase.auth().currentUser?.displayName || "Coffee Lover",
  photoURL:
    "https://firebasestorage.googleapis.com/v0/b/brewsdrip.appspot.com/o/user-pics%2FdefaultUser.png?alt=media&token=7e5e71c8-aabb-4bdd-a55c-72ec3659b41d",
  uid: firebase.auth().currentUser?.uid,
  email: firebase.auth().currentUser?.email,
};

export const getMyCollections = (collectionName, currentUser, setContents) => {
  const unsub = firestore
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
  return unsub;
};

export const getCollectedCollections = (
  collectionName,
  currentUser,
  setContents
) => {
  const unsub = firestore
    .collection(collectionName)
    .where("collectedBy", "array-contains", currentUser?.uid)
    .orderBy("createdAt", "desc")
    .onSnapshot((collectionSnapshot) => {
      const data = collectionSnapshot.docs.map((docSnapshot) => {
        const id = docSnapshot.id;
        return { ...docSnapshot.data(), id };
      });
      setContents(data);
    });
  return unsub;
};

export const getDefaultCollections = (collectionName, setContents) => {
  firestore
    .collection(collectionName)
    .where("isDefault", "==", true)
    .get()
    .then((collectionSnapshot) => {
      const data = collectionSnapshot.docs.map((docSnapshot) => {
        const id = docSnapshot.id;
        return { ...docSnapshot.data(), id };
      });
      setContents(data);
    });
};

export const getCollectionsDescOrder = (collectionName, setContents) => {
  const unsub = firestore
    .collection(collectionName)
    .orderBy("createdAt", "desc")
    .onSnapshot((collectionSnapshot) => {
      const data = collectionSnapshot.docs.map((docSnapshot) => {
        const id = docSnapshot.id;
        return { ...docSnapshot.data(), id };
      });
      setContents(data);
    });

  return unsub;
};

export const getCollectionsFieldUpdate = (
  collectionName,
  id,
  field,
  activeInField,
  uid
) => {
  firestore
    .collection(collectionName)
    .doc(id)
    .update({
      [field]: activeInField
        ? firebase.firestore.FieldValue.arrayRemove(uid)
        : firebase.firestore.FieldValue.arrayUnion(uid),
    });
};

export const getDoc = (collectionName, idName) => {
  return firestore.collection(collectionName).doc(idName);
};

export const getDocOnSnapShot = (collectionName, idName, setContent) => {
  const unsub = getDoc(collectionName, idName).onSnapshot((docSnapshot) => {
    const data = docSnapshot.data();
    data && setContent(data);
  });
  return unsub;
};

export const deleteDoc = (collectionName, idName) => {
  getDoc(collectionName, idName).delete();
};

export const getCreatedAt = () => {
  return firebase.firestore.Timestamp.now();
};

export default firebase;
