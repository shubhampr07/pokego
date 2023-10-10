// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD368KjBaeIA3Z-QUL2aDEVClJXaEJaPr4",
  authDomain: "pokemon-game-cf1a9.firebaseapp.com",
  projectId: "pokemon-game-cf1a9",
  storageBucket: "pokemon-game-cf1a9.appspot.com",
  messagingSenderId: "991220374903",
  appId: "1:991220374903:web:ff19bc67c2919008429572",
  measurementId: "G-KVQ23NZEW6"
};


const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");