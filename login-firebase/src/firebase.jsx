import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAwZYhbpYIHwZkIPGymQ9rUlZLstYmgwXw",
    authDomain: "fir-login-64f52.firebaseapp.com",
    projectId: "fir-login-64f52",
    storageBucket: "fir-login-64f52.appspot.com",
    messagingSenderId: "267959755946",
    appId: "1:267959755946:web:f48454de0b62865357dcd3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth()
export { app, auth }