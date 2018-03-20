import firebase from 'firebase'

// Initialize Firebase
let config = {
  apiKey: "AIzaSyCkNVMJGoOKqbYK0MPrgb43apGk5NRP3GU",
  authDomain: "pomodoro-skale.firebaseapp.com",
  databaseURL: "https://pomodoro-skale.firebaseio.com",
  projectId: "pomodoro-skale",
  storageBucket: "gs://pomodoro-skale.appspot.com",
  messagingSenderId: "445644179915"
};

let firebaseapp

if(firebase.apps.length === 0) {
  firebaseapp = firebase.initializeApp(config)
} else {
  firebaseapp = firebase.apps[0]
}

export default firebaseapp
