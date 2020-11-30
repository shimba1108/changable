import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGT_Z4O4mw9JdpieGuEDoEkgOiVw6wv50",
  authDomain: "chat-app-a3f2b.firebaseapp.com",
  databaseURL: "https://chat-app-a3f2b.firebaseio.com",
  projectId: "chat-app-a3f2b",
  storageBucket: "chat-app-a3f2b.appspot.com",
  messagingSenderId: "496108527036",
  appId: "1:496108527036:web:8de3e375bf26204b67dfb9",
  measurementId: "G-8PF2BPK59S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };
export default db;
