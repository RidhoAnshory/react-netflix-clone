import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seeding';

const config = {
  apiKey: "AIzaSyB2hglxp1f8SgLo8OiMhPwHyOTWWrjsUF8",
  authDomain: "netflix-clone-d01d9.firebaseapp.com",
  databaseURL: "https://netflix-clone-d01d9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-clone-d01d9",
  storageBucket: "netflix-clone-d01d9.appspot.com",
  messagingSenderId: "74753229208",
  appId: "1:74753229208:web:6f4987fb671aa9e652ebed",
}

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
