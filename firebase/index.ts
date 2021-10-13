import firebase from "firebase";
import "firebase/firestore";
import { Task } from "react-native";
const firebaseConfig = {
  apiKey: "AIzaSyBXU70tOKmQVplR6jMlwrNM3rZYncB9ZWg",
  authDomain: "fb-api-ae7bd.firebaseapp.com",
  projectId: "fb-api-ae7bd",
  storageBucket: "fb-api-ae7bd.appspot.com",
  messagingSenderId: "925142055125",
  appId: "1:925142055125:web:f3eb97c97a86aa76200a5c",
  measurementId: "G-53LVFQ54ZH",
};

// Initialize Firebase
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export interface TodoIntfs {
  todo: string;
  details: string;
}

export const saveTodo = async (todo: TodoIntfs) => {
  await db.collection("todos").add(todo);
};

export default {
  firebase,
  db,
};
