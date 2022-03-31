import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  where,
  getDocs,
  query,
  limit
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJnUU1USpvgfxOSgZhl6Qs6iw5msIxKFI",
  authDomain: "abcd-db9c2.firebaseapp.com",
  databaseURL: "https://abcd-db9c2.firebaseio.com",
  projectId: "abcd-db9c2",
  storageBucket: "abcd-db9c2.appspot.com",
  messagingSenderId: "1009408563141",
  appId: "1:1009408563141:web:2d591b4057a6045d8a1dac",
  measurementId: "G-3FX6791LPM"
};

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

// Auth exports
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore exports
export const firestore = getFirestore(firebaseApp);
