import firebase from "firebase/compat/app";
import "firebase/compat/database";


const config = {
    //you api key
}
const db = firebase.initializeApp(config)

export default db;