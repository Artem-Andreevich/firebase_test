import { useState } from "react";
import firebase from "../../App/firebase.js"

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const auth = getAuth();
    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('user created')
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('user created error', errorMessage)

          // ..
        });
    }


  
    return (
      <div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => {handleSignUp(email, password)}}>Sign Up</button>
      </div>
    );
  }
  
  export default SignUp;