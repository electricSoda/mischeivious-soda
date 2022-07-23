// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getDatabase, ref, set, child, onValue, get } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js" 
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZLIkSQMVjX7Rr97jxEjWTnpEFN8FUB48",
  authDomain: "bn20-a920f.firebaseapp.com",
  projectId: "bn20-a920f",
  storageBucket: "bn20-a920f.appspot.com",
  messagingSenderId: "200614739472",
  appId: "1:200614739472:web:1c7b58b166326770059495",
  measurementId: "G-685TTTSTEC",
  databaseURL: "https://bn20-a920f-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export {firebaseApp, analytics, getDatabase, ref, set, child, onValue, get}