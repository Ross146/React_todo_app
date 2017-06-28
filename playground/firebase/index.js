import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyC_j07XdswVjaAlZK8CHFXqL5w_MDoNW-s",
    authDomain: "ross146-todo-app.firebaseapp.com",
    databaseURL: "https://ross146-todo-app.firebaseio.com",
    projectId: "ross146-todo-app",
    storageBucket: "ross146-todo-app.appspot.com",
    messagingSenderId: "398021581456"
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Evgeny',
        age: 27
    }
});

firebaseRef.once('value').then((snapshot) => {
    console.log('Got entire database', snapshot.val())
}, (e) => {
    console.log('unable to fetch value', e)
});