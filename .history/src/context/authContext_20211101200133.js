import { createContext, useContext, useEffect, useState } from "react";
import {auth} from '../firebase'

const AuthContext = createContext({
    currentUser :null,
})

export default function  AuthContextProvider({children}){
const [currentUser, setstate]= useState(initialState)
}