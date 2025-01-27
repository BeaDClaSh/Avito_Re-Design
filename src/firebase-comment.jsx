import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {addDoc, collection} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5zNiPYLoWsrCBGCGlQAzXgquFBKXOLJ0",
    authDomain: "portfolio-2c9aa.firebaseapp.com",
    projectId: "portfolio-2c9aa",
    storageBucket: "portfolio-2c9aa.firebasestorage.app",
    messagingSenderId: "524084746588",
    appId: "1:524084746588:web:dfe67a6483cbcdd3248999",
    measurementId: "G-T7PRZN263C"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };