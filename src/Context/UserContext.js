"use client";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.init";


export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setuser] = useState(null);
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);

  
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Create New User With Firebase
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Google Sign In
  const googleSginIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Email Sign In
  const signIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Github Sign In
  const githubSingIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // Upadate User Info
  const updateUser = userInfo => {
    setLoading(true);
    return updateProfile(auth.currentUser, userInfo);
  };

  // Upadete user Display Name while Registering
  const setuserProfile = profile => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  // Checks User Login or Not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setLoading(false);
      setuser(currentUser);
    });

    return () => unsubscribe();
  });

  // lOG OUT
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    signUp,
    githubSingIn,
    updateUser,
    loading,
    setuserProfile,
    logOut,
    googleSginIn,
    signIn,
    auth,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
