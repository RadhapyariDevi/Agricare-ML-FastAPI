"use client";
import {createContext, useContext, useState, useEffect} from "react";
import Cookies from "js-cookie";
import api from "../lib/api.js";

const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = Cookies.get("token");
        if(!token){
            setLoading(false);
            return;
        }
        api.get("/auth/me")
            .then((res) => setUser(res.data.user))
            .catch(()=>{
                Cookies.remove("token");
                setUser(null);
            })
            .finally(()=> setLoading(false));
    }, []);
    const logout = () =>{
        Cookies.remove("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, setUser, loading, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}
