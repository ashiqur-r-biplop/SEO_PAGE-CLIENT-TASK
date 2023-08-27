import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_apiKey,
  authDomain: import.meta.env.FIREBASE_authDomain,
  projectId: import.meta.env.FIREBASE_projectId,
  storageBucket: import.meta.env.FIREBASE_storageBucket,
  messagingSenderId: import.meta.env.FIREBASE_messagingSenderId,
  appId: import.meta.env.FIREBASE_appId,
};
export const app = initializeApp(firebaseConfig);
