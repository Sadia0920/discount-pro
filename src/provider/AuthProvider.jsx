import { createContext, useEffect, useState } from 'react';
import { auth } from './../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext(null);

export default function AuthProvider({children}) {

  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
  const googleProvider = new GoogleAuthProvider();

  // Register
  const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  // Login
  const loginUser = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  // Sign Out
  const signOutUser = () => {
    setLoading(false)
    return signOut(auth)
  }
  // Google Sign in
  const loginWithGoogle = () => {
    return signInWithPopup(auth,googleProvider)
  }


  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser => {
        if(currentUser){
            console.log('currently logged user',currentUser)
            setUser(currentUser)
            setLoading(false)
        }
        return () => {
            unSubscribe();
        }
    })
},[])


  const authInfo = {
    createUser,
    loginUser,
    signOutUser,
    user,
    setUser,
    loading,
    loginWithGoogle
  }
    return (
      <div>
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
      </div>
    )
  }
  