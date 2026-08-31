import React from 'react'
import { db } from '../firebase/config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
import { useState, useEffect } from 'react'


export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //função de cleanup para evitar esgotamento de memória
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try{
            const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password);

            await updateProfile(user, {
                displayName: data.displayName
            })
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;
            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa ter pelo menos 6 caracteres!";
            } else if(error.message.includes("email-already")){
                systemErrorMessage = "E-mail já cadastrado!";
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde!";
            }
            setError(systemErrorMessage);
        }
        
        setLoading(false);
    };

    //logout
    const logout = () => {
        checkIfIsCancelled();
        signOut(auth);
    }

    //login

    const login = async(data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(false);

        try{
            const {user} = await signInWithEmailAndPassword(auth, data.email, data.password);
        } catch (error) {
            console.log(error.message);

            let systemErrorMessage;
            if(error.message.includes("invalid-credential")){
                systemErrorMessage = "E-mail ou senha incorretos!";
            }else{
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde!";
            }

            setError(systemErrorMessage);
        }
        setLoading(false);
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return{ auth, createUser, login, loading, error, logout }
}