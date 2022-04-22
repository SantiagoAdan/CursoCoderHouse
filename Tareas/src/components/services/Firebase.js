import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCeUkvX6OJb-KLjw69U3JjDw-0nq73GoTw",
  authDomain: "be-coder-267a2.firebaseapp.com",
  projectId: "be-coder-267a2",
  storageBucket: "be-coder-267a2.appspot.com",
  messagingSenderId: "820021576140",
  appId: "1:820021576140:web:d8d2d5513cd486ff6e5d69"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)