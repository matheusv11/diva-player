import { createContext, useState } from "react";
import axios from '../utils/axios';
import { useNavigation } from "@react-navigation/native";
import { StackActions } from '@react-navigation/native';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [token, setToken] = useState("");
    const navigation = useNavigation();

    function login(email: string, password: string) {
        axios.post('/auth', { email: email, senha: password })
        .then(res => {
          console.log("Response", res.data);
          setToken(res.data.acessToken)
          navigation.dispatch(StackActions.replace('Home'))
        }).catch(error=> {
          console.log("ERROR", error)
          alert(error.response.data.error)
        })
    }

    return(
        <AuthContext.Provider value={{ nome: "JOSÉ", login, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;