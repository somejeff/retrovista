import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "retro-vista.firebaseapp.com",
  projectId: "retro-vista",
  storageBucket: "retro-vista.appspot.com",
  messagingSenderId: "800482235899",
  appId: "1:800482235899:web:07564137ad671b2114e75e",
});

const auth = getAuth(firebaseApp);
const fb = { auth };
export default fb;
