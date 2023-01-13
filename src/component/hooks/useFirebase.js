import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializauthentication from '../Firebase/firebase.init';

initializauthentication();

const useFirebase = () => {
        const [user, setUsers] = useState({});
        const [isLogin, setIsLogin] = useState(true);
        const [errors, setErrors] = useState({});
        const auth = getAuth();
        const signInUsingGoogle = () => {
                setIsLogin(true);
                const googleProvider = new GoogleAuthProvider();
                signInWithPopup(auth, googleProvider)
                        .then(result => {
                                setUsers(result.user);
                                //console.log(result.user)
                        })
                        .finally(() => { setIsLogin(false) })


        }
        const signInUser = (email, password) => {
                createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                                // Signed in 
                                const user = userCredential.user;
                                // ...
                        })
                        .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                // ..
                        });
        }

        // observe user state change 
        useEffect(() => {
                const unsubscribe = onAuthStateChanged(auth, user => {
                        if (user) {
                                setUsers(user);
                        }
                        else {
                                setUsers({});
                        }

                        setIsLogin(false);
                })
                return () => unsubscribe;
        }, [])

        const logOut = () => {
                signOut(auth)
                setIsLogin(true)
                        .then(
                                setUsers({})
                        )
                        .finally(() => { setIsLogin(false) })
        }


        return {
                user,
                signInUsingGoogle,
                errors,
                logOut,
                isLogin,
                signInUser
        }
};

export default useFirebase;