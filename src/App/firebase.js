import { initializeApp } from "firebase/app";

const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID

  apiKey: "AIzaSyDEzSXmE-L4nSGhRoW9NGXhN0yPuAcVILs",
  authDomain: "testing-574a6.firebaseapp.com",
  projectId: "testing-574a6",
  storageBucket: "testing-574a6.appspot.com",
  messagingSenderId: "720334323256",
  appId: "1:720334323256:web:575064f51a0a3da66e30cd"
};

const firebase = initializeApp(firebaseConfig);
export default firebase