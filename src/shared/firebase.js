import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCZxtqy0BDoitga_ekyvQz_hYF2VcfXys0",
    authDomain: "magezine-8c875.firebaseapp.com",
    projectId: "magezine-8c875",
    storageBucket: "magezine-8c875.appspot.com",
    messagingSenderId: "925500515135",
    appId: "1:925500515135:web:6d6249048c2ca3fcc4298a",
    measurementId: "G-YFCSZYJN6W"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();
export{auth, apiKey, firestore, storage, realtime};