import { createContext, useContext, useState } from "react";
import {auth} from '../firebase';

const AuthContext = createContext({
    currentUser :null,
})

export const useAuth = () => useContext(AuthContext)

export default function  AuthContextProvider({children}){
const [currentUser, setCurrentUser]= useState(null);
const [loading, setLoading] = useState();
const [error,setError] = useState("");

const registerU
 

const value = {
    currentUser,
}

return <AuthContext.Provider value={value}> 
    {children}
</AuthContext.Provider>
}