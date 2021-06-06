import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyApX9Oi30g7gkuCrH1IkdCfQ7PPteJq4WE",
    authDomain: "fir-crud-8885d.firebaseapp.com",
    databaseURL: "https://fir-crud-8885d-default-rtdb.firebaseio.com",
    projectId: "fir-crud-8885d",
    storageBucket: "fir-crud-8885d.appspot.com",
    messagingSenderId: "32995721953",
    appId: "1:32995721953:web:243593d788731ee4faada0",
    measurementId: "G-MVW7BH28X7"
  };

var firebasedb = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebasedb