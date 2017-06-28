import firebase from 'firebase';

try {
    let config = {
        apiKey: "AIzaSyC_j07XdswVjaAlZK8CHFXqL5w_MDoNW-s",
        authDomain: "ross146-todo-app.firebaseapp.com",
        databaseURL: "https://ross146-todo-app.firebaseio.com",
        projectId: "ross146-todo-app",
        storageBucket: "ross146-todo-app.appspot.com",
        messagingSenderId: "398021581456"
    };

    firebase.initializeApp(config);
} catch (e) {

}


export let firebaseRef = firebase.database().ref();

export default firebase;