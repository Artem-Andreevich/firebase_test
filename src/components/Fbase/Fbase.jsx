import React from 'react';
import { doc ,setDoc } from "firebase/firestore"
import { getFirestore } from "firebase/firestore";
import firebase from "../../App/firebase.js"


const Fbase = () => {
    const db = getFirestore(firebase);

    const handleAddUser = async () => {

        await setDoc( doc(db, "users", "AS"), {
            name: "Artme",
            last: "Shapo"
        })
            .then( () => {console.log("Добавил в базу")})
            .catch(() => {console.log("Не добавил в базу")})

    }


    return (

        <div>
            <button onClick={handleAddUser}>Добавить Юзера</button>        
        </div>
    );
};

export default Fbase;