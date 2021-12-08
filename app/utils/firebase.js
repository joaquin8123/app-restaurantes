import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBfzFJUrbPdcxmCvnbtj9v7IV0ucQfAFaU",
  authDomain: "tenedores-5e462.firebaseapp.com",
  databaseURL: "https://tenedores-5e462.firebaseio.com",
  projectId: "tenedores-5e462",
  storageBucket: "tenedores-5e462.appspot.com",
  messagingSenderId: "929863625561",
  appId: "1:929863625561:web:13d1ff6415d1ba984f3a48",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
