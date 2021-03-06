import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCuHBzZIHcpcmiSUPhK_j7V4t6Qat7dmWY",
    authDomain: "idobatakaigi-for-demo-5fefd.firebaseapp.com",
    databaseURL: "https://idobatakaigi-for-demo-5fefd-default-rtdb.firebaseio.com",
    projectId: "idobatakaigi-for-demo-5fefd",
    storageBucket: "idobatakaigi-for-demo-5fefd.appspot.com",
    messagingSenderId: "348575265473",
    appId: "1:348575265473:web:0eb85b25130b7856635a40"
  };
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const messagesRef = database.ref('messages');
  
  export const pushMessage =({name, text}) =>{
    
    messagesRef.push({name, text});

  }
