import firebase from 'firebase'
import 'firebase/firestore'
import store from './store'

var config = {
    apiKey: "AIzaSyBqy2179d_4jFl1hzyccXlrGf74BozRHb4",
    authDomain: "anagram-e41d5.firebaseapp.com",
    databaseURL: "https://anagram-e41d5.firebaseio.com",
    projectId: "anagram-e41d5",
    storageBucket: "",
    messagingSenderId: "5295946026"
}

const firebaseApp = firebase.initializeApp(config);
const db = firebase.firestore()

export default db
