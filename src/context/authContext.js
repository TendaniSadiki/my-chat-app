import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut
, sendPasswordResetEmail } from "@firebase/auth";
import {auth} from '../firebase';

export const AuthContext = createContext({
    currentUser :null,
})

export const useAuth = () => useContext(AuthContext)

export  function  AuthContextProvider({children}){
const [currentUser, setCurrentUser]= useState(null);
const [loading, setLoading] = useState();
const [error,setError] = useState("");

useEffect(() =>{
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, res =>{
        res ? setCurrentUser(res) : setCurrentUser(null)
        setError("");
        setLoading(false);
});
return unsubscribe
}, [])

const registerUser=(
email,
password,
username,
firstname,
surname,
country,
city,
town, ) =>{
setLoading(true)
createUserWithEmailAndPassword(auth, email, password).then(() =>{
    return updateProfile(auth.currentUser, {
        displayName: username,
        displayFirstName: firstname, 
        displaySurname :surname,
        displayCountry :country,
        displayCity :city,
        displayTown :town,  
    })
    
}).then(res  => console.log(res))
  .catch((err) => setError(err.massage))
  .finally(() => setLoading(false))
};

const signInUser = (email, password) =>{
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then(res  => console.log(res))
    .catch((err) => setError(err.massage))
    .finally(() => setLoading(false))
}
const loguotUser = (email, password) =>{
    //
    signOut(auth);
}
const forgotPassword = (email) =>{
    //
    return sendPasswordResetEmail(auth, email)
}

const value = {
    currentUser,
    loading,
    error,
    registerUser,
    signInUser,
    loguotUser,
    forgotPassword
}


return <AuthContext.Provider value={value}> 
    {children}
</AuthContext.Provider>
}