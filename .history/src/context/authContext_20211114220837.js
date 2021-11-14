import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "@firebase/auth";
import {auth} from '../firebase';

const AuthContext = createContext({
    currentUser :null,
})

export const useAuth = () => useContext(AuthContext)

export default function  AuthContextProvider({children}){
const [currentUser, setCurrentUser]= useState(null);
const [loading, setLoading] = useState();
const [error,setError] = useState("");

useEffect(() =>{
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, res =>{
        res ? setCurrentUser(res) : setCurrentUser(null)
        setError("");
        setLoading(false);
})
}, [])

const registerUser=(email,
password,
username,
firstnane,
surname,
country,
city,
town, ) =>{
setLoading(true)
createUserWithEmailAndPassword(auth, email, password).then(() =>{
    return updateProfile(auth.currentUser, {
        displayName: username,

    })
    
}).then(res  => console.log(res))
  .catch((err) => setError(err.massage))
  .finally(() => setLoading(false))
};


const value = {
    currentUser,
}

return <AuthContext.Provider value={value}> 
    {children}
</AuthContext.Provider>
}