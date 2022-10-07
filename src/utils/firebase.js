// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3xJOju-pkVk-05d62T_tK3BxdpG83CTE",
  authDomain: "petty-30052.firebaseapp.com",
  projectId: "petty-30052",
  storageBucket: "petty-30052.appspot.com",
  messagingSenderId: "373689396341",
  appId: "1:373689396341:web:bcdfff3832f2352b86dc3c",
  measurementId: "G-9151PT72GX",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
