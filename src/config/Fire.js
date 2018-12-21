
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyClEB6HSuPQm6KQ02hnc0zQOfNOvY4n7sc",
    authDomain: "thehurricanesdb.firebaseapp.com",
    databaseURL: "https://thehurricanesdb.firebaseio.com",
    projectId: "thehurricanesdb",
    storageBucket: "thehurricanesdb.appspot.com",
    messagingSenderId: "464113251107"
};

const fire = firebase.initializeApp(config);
export default fire;