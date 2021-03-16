import firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyAnvkeRTHdwjx9JuvDnEX1b7DeFZO1ku_c",
    authDomain: "ebook-cba5f.firebaseapp.com",
    databaseURL: "https://ebook-cba5f-default-rtdb.firebaseio.com",
    projectId: "ebook-cba5f",
    storageBucket: "ebook-cba5f.appspot.com",
    messagingSenderId: "802485317478",
    appId: "1:802485317478:web:4257c30f281e6d57b9e2a7",
    measurementId: "G-74ECFM5//NNC"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings); 

export default firebase;
