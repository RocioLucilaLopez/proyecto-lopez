
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3YaRJkoZGUlqsmbcrsxjkKDbrQiMC8ec",
  authDomain: "proyecto-lopez-77d11.firebaseapp.com",
  projectId: "proyecto-lopez-77d11",
  storageBucket: "proyecto-lopez-77d11.appspot.com",
  messagingSenderId: "86782091903",
  appId: "1:86782091903:web:700329e9b8811ffd68554a"
};

const app = initializeApp(firebaseConfig);
export const getFirestoreApp = ()=> {
     return app
}