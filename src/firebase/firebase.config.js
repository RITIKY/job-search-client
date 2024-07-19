// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSHQyjDK0MGbrImS0DIqwpl_WF9xSvCpg",
  authDomain: "job-portal-demo-8ef51.firebaseapp.com",
  projectId: "job-portal-demo-8ef51",
  storageBucket: "job-portal-demo-8ef51.appspot.com",
  messagingSenderId: "829390274632",
  appId: "1:829390274632:web:0b8a05fa53fac04dca187d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app