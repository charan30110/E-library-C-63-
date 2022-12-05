import firebase from "firebase";
//require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBFovF6x53eWwek5ZP-W8OyS-jPYKozp0M",
  authDomain: "library-app-9b493.firebaseapp.com",
  projectId: "library-app-9b493",
  storageBucket: "library-app-9b493.appspot.com",
  messagingSenderId: "1200523405",
  appId: "1:1200523405:web:ac4e617518c49fcaebbac4"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();