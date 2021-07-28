import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDbLi3qRRjY_uRfpHPC1jXKzu9aZ6Yt-jU',
  authDomain: 'slack-clone-9965e.firebaseapp.com',
  projectId: 'slack-clone-9965e',
  storageBucket: 'slack-clone-9965e.appspot.com',
  messagingSenderId: '1094562000209',
  appId: '1:1094562000209:web:f6ed414805727b33bf7770',
  measurementId: 'G-G3TXE7XTSB',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
