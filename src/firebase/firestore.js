import firebase from "firebase";
import "firebase/firestore";
import config from "../config";

console.error(process.env, config);

firebase.initializeApp(config.firebase);
export default firebase.firestore();
