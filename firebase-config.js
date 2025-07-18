// firebase-config.js

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBGhYgG-K8PlKhkmNrznWoawqfMiTLE8w4",
  authDomain: "zapvid-d4665.firebaseapp.com",
  projectId: "zapvid-d4665",
  storageBucket: "zapvid-d4665.appspot.com",
  messagingSenderId: "666216321552",
  appId: "1:666216321552:web:91c7e6689c30ff08467095",
  measurementId: "G-HGK9SE40BH"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Set up services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
