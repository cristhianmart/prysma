
import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid'
const firebaseConfig = {
  apiKey: "AIzaSyAI5v6cnjhMM0sb1K8-VcLyzowWC7Cb9PQ",
  authDomain: "produccion-fotografica.firebaseapp.com",
  projectId: "produccion-fotografica",
  storageBucket: "produccion-fotografica.appspot.com",
  messagingSenderId: "681548749620",
  appId: "1:681548749620:web:e29ba295c39d759d4aa361"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export function uploadFile(file) {
    const storageRef= ref(storage, v4());
    uploadBytes(storageRef, file).then((snapshot)=> {
        console.log(snapshot);
    })
}