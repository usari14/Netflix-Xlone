
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyAHoL9csoUE5yClqIrOJdZQkpm9B2_-tbw",
    authDomain: "netflix-xlone-3f550.firebaseapp.com",
    projectId: "netflix-xlone-3f550",
    storageBucket: "netflix-xlone-3f550.firebasestorage.app",
    messagingSenderId: "122513284278",
    appId: "1:122513284278:web:8f1a6018fd71050e43da17"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async () => {
    signOut(auth);
    console.log("logged out")
}

export { auth, db, login, signup, logout };