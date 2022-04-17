import admin from 'firebase-admin'
import { getAuth } from 'firebase-admin/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAf1epO3yiuamHUtDSHiWCrLIH0FYfBnyA",
    authDomain: "ratings-portal.firebaseapp.com",
    projectId: "ratings-portal",
    storageBucket: "ratings-portal.appspot.com",
    messagingSenderId: "551257224758",
    appId: "1:551257224758:web:aa3a2d9c9e1ba5962aca97"
};

//firebase-admin
const serviceAccount = require("./serviceAccountKey.json");

let adminApp

if (!admin.apps.length) {
  adminApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    
  });
}
const firestore = admin.firestore();
export {firestore}
export default adminApp