import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyChzWgdO0nS0vkhIPZg5vkkjAGJ8TqAuTI",
  authDomain: "fir-crud-38477.firebaseapp.com",
  projectId: "fir-crud-38477",
  storageBucket: "fir-crud-38477.appspot.com",
  messagingSenderId: "390811469287",
  appId: "1:390811469287:web:a3df3aae0f96201594e942"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};
