import React, { useRef } from 'react';
import firebase from "../../App/firebase.js"
import { getStorage, ref, uploadBytes } from "firebase/storage";

const Upload = () => {

    const storage = getStorage();
    const formRef = useRef(null)
    // console.log(storage)
    const mountainsRef = ref(storage, 'mountains.jpg');
    // console.log(mountainsRef)

    const mountainImagesRef = ref(storage, 'images/mountains.jpg');

    const up = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        console.log(formData.get("img"))
        uploadBytes(mountainImagesRef, formData.get("img")).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    }

    return (
        <form onSubmit={ (e) => {up(e)}} ref={formRef}> 
            <input type="file" name='img'/>
            <button>Отправить</button>

        </form>
    );
};

export default Upload;