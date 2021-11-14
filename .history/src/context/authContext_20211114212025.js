import { createContext, useContext, useState } from "react";
import {auth} from '../firebase';

const AuthContext = createContext({
    currentUser :null,
})

export const useAuth = ({formData, setFormData}) => useContext(AuthContext)

export default function  AuthContextProvider({children}){
const [currentUser, setCurrentUser]= useState(null);
const [loading, setLoading] = useState();
const [error,setError] = useState("");

const registerUser = (formData.email, formData.password) => {
///
}


const value = {
    currentUser,
}

return <AuthContext.Provider value={value}>
    {children}
</AuthContext.Provider>
}