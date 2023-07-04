// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFa3ZPif9yXz105fS9Z6adGyFQEdIjggU",
  authDomain: "uploadingfiles-d41ed.firebaseapp.com",
  projectId: "uploadingfiles-d41ed",
  storageBucket: "uploadingfiles-d41ed.appspot.com",
  messagingSenderId: "634158520348",
  appId: "1:634158520348:web:c4181c69808e1acd5927d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const storage = getStorage(app) ;