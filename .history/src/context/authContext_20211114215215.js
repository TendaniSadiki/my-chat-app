import { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import {auth} from '../firebase';

const AuthContext = createContext({
    currentUser :null,
})

export const useAuth = ({formData, setFormData})) => useContext(AuthContext)

export default function  AuthContextProvider({children}){
const [currentUser, setCurrentUser]= useState(null);
const [loading, setLoading] = useState();
const [error,setError] = useState("");

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
  .catch(())
};


const value = {
    currentUser,
}

return <AuthContext.Provider value={value}> 
    {children}
</AuthContext.Provider>
}