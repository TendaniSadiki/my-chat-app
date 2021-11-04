import { createContext, useContext, useEffect, useState } from "react";
import {auth} from '../firebase'

const AuthContext = createContext({
    currentUser :null,
})

export

export default function  AuthContextProvider({children}){
const [currentUser, setCurrentUser]= useState(null)

const value = {
    currentUser
}

return <AuthContext.Provider value={value}> 
    {children}
</AuthContext.Provider>
}