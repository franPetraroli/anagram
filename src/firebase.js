import firebase from 'firebase'
import 'firebase/firestore'

var config = {
  apiKey: "AIzaSyBqy2179d_4jFl1hzyccXlrGf74BozRHb4",
  authDomain: "anagram-e41d5.firebaseapp.com",
  databaseURL: "https://anagram-e41d5.firebaseio.com",
  projectId: "anagram-e41d5",
  storageBucket: "",
  messagingSenderId: "5295946026",
  timestampsInSnapshots: true
}

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore()

export default db
