import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyCIdl8q5UQUSASqJ6CUbmbnWxsCH3_kku8',
  authDomain: 'react-portfolio-dca7d.firebaseapp.com',
  projectId: 'react-portfolio-dca7d',
  storageBucket: 'react-portfolio-dca7d.appspot.com',
  messagingSenderId: '963883252715',
  appId: '1:963883252715:web:90dc75080c55c1247cf7ae',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);