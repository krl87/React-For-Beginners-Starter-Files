import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDZz2gRnHp9eZVLq7GLOjoaftK4EPzECZ8",
    authDomain: "catch-of-the-day-kayley-luftig.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-kayley-luftig.firebaseio.com"
  });

const base = Rebase.createClass(firebaseApp.database());


// this is a named export
export { firebaseApp }

//this is a default export
export default base;