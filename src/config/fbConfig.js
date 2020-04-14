import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let config = {
        apiKey: "AIzaSyDm2H4EPJtLG7Sq-yZHg8JUhqnP4KOjtc4",
        authDomain: "test-react-app-115c5.firebaseapp.com",
        databaseURL: "https://test-react-app-115c5.firebaseio.com",
        projectId: "test-react-app-115c5",
        storageBucket: "test-react-app-115c5.appspot.com",
        messagingSenderId: "1052089124320",
        appId: "1:1052089124320:web:99983a264e636407bb1785"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 