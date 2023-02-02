import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgYZW1es3o0IGLS4DWfarWGSBgA4MYHkE",
  authDomain: "mentoryard-a16c0.firebaseapp.com",
  projectId: "mentoryard-a16c0",
  storageBucket: "mentoryard-a16c0.appspot.com",
  messagingSenderId: "727290312368",
  appId: "1:727290312368:web:7c1717365fb6029e97ad75",
  measurementId: "G-2P0MDR00JP",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
