import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_ZshMcPATPIQdfRSCf0dGlMmbYGJRGfg",
  authDomain: "task7-1-4c893.firebaseapp.com",
  projectId: "task7-1-4c893",
  storageBucket: "task7-1-4c893.appspot.com",
  messagingSenderId: "410838833109",
  appId: "1:410838833109:web:c435a7c2f97dbf689acf5c",
  measurementId: "G-E4C7MYJJ97"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);