
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBFDWWGsN9h3Tlfm3TNdBXNpocJdpHS29E",
    authDomain: "miniblogreact-7786f.firebaseapp.com",
    projectId: "miniblogreact-7786f",
    storageBucket: "miniblogreact-7786f.firebasestorage.app",
    messagingSenderId: "40559556935",
    appId: "1:40559556935:web:c3049ba7981d6d3c0b3462"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };