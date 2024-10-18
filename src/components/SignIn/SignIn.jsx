import React, { useState } from 'react';
import firebase from "../../App/firebase.js"
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";




function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const auth = getAuth();
    console.log(auth)
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("succeess", user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
        });
    }



  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignIn;