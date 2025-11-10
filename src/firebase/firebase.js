// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC4NSPfbGAiQccEXSlwXsLSBZV6gd0mrzA',
    authDomain: 'ezen-test-9bc64.firebaseapp.com',
    projectId: 'ezen-test-9bc64',
    storageBucket: 'ezen-test-9bc64.firebasestorage.app',
    messagingSenderId: '849029273895',
    appId: '1:849029273895:web:1b7b6d4469dea57df1f102',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
