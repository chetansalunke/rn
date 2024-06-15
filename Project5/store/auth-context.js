import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";


export const AuthContext = createContext({
    token:'',
    isAuthinticated: false,
    authinticate:(token)=>{},
    logout:()=>{}
});

function AuthContextProvider({children}){

    const [authToken, setAuthToken]= useState();

    function authinticate(token){
        setAuthToken(token);
        AsyncStorage.setItem('token',token);
    }
    function logout(){
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }
    const value={
        token : authToken,
        isAuthinticated: !!authToken,
        authinticate:authinticate,
        logout:logout,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}

export default AuthContextProvider;