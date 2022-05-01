import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAf1epO3yiuamHUtDSHiWCrLIH0FYfBnyA",
  authDomain: "ratings-portal.firebaseapp.com",
  projectId: "ratings-portal",
  storageBucket: "ratings-portal.appspot.com",
  messagingSenderId: "551257224758",
  appId: "1:551257224758:web:aa3a2d9c9e1ba5962aca97"

};


// Initialize Firebase
  
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
setPersistence(auth, browserSessionPersistence)
// getAuth(app).setPersistence(firebase.auth.Auth.Persistence.SESSION)
// export const auth = getAuth(app).setPersistence(firebase.auth.Auth.Persistence.SESSION);
// auth.setPersistence()

// auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

// export const database = getDatabase(app);
export const firestoredb = getFirestore(app);


