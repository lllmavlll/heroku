import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDND6WJavR9ONUfvQALhT0xtifR9KoTUi4",
  authDomain: "mavzone.firebaseapp.com",
  projectId: "mavzone",
  storageBucket: "mavzone.appspot.com",
  messagingSenderId: "846315271095",
  appId: "1:846315271095:web:c9301e1d42c91cd9cf2e32"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

