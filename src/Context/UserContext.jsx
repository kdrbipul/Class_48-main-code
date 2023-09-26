import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import app from '../firebase/firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext('');

const UserContext = ({ children }) => {


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const GoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    
    const userInfo = {
        createUser,
        GoogleSignIn
    }
    
    
    return (
        <AuthContext.Provider value={userInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default UserContext;