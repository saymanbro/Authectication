import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


firebase.initializeApp(firebaseConfig);

function App() {
  const  provider = new firebase.auth.GoogleAuthProvider();
   
  const handleSignIn = () =>{
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      console.log(res);
    })
  }


  return (
    <div style={{textAlign:'center'}} >
      <button onClick={handleSignIn}>Sign In</button>
      
    </div>
  );
}

export default App;
