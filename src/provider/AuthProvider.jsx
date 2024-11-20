import { createContext, useEffect, useState } from 'react';
import { auth } from './../firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

export default function AuthProvider({children}) {

  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

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
    loading
  }
    return (
      <div>
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
      </div>
    )
  }
  