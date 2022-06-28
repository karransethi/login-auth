import {useContext, createContext, useState, useEffect} from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase-config";


const AuthContext =  createContext();

export const AuthContextProvider = ({children})=>{
const [user,setUser]=useState({});

    const googleSignIn= () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        console.log(currentUser);
      });
      return ()=>{
        unsubscribe();
      }
    },[])

    return (
        <AuthContext.Provider value={{googleSignIn, user}} >
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth=()=>{
    return useContext(AuthContext)
}