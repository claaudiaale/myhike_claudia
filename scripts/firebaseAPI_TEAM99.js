//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDdwsOADJ48VlizhNuGnlLPOrDIpLe1xaA",
    authDomain: "comp1800-202410-demo-8ce33.firebaseapp.com",
    projectId: "comp1800-202410-demo-8ce33",
    storageBucket: "comp1800-202410-demo-8ce33.appspot.com",
    messagingSenderId: "971641566317",
    appId: "1:971641566317:web:3c39a90eda9c7933f87b64"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
