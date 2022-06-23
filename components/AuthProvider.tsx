import { createContext, useEffect, useState } from "react";
import axios from '../utils/axios';
import { useNavigation } from "@react-navigation/native";
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [token, setToken] = useState("");
    const navigation = useNavigation();

    function login(email: string, password: string) {
        axios.post('/auth', { email: email, senha: password })
        .then(async res => {
          await AsyncStorage.setItem('token', JSON.stringify(res.data.acessToken))
          setToken(res.data.acessToken)
          navigation.dispatch(StackActions.replace('Home'))
        }).catch(error=> {
          console.log("ERROR", error)
          alert(error.response.data.error)
        })
    }

    useEffect(() => {
      const getLocalToken = async () => {
        const tokenStorage = await AsyncStorage.getItem("token")
        if(!token) {
          setToken(tokenStorage ? JSON.parse(tokenStorage) : "")
          navigation.dispatch(StackActions.replace('Home'))

        }
      }

      getLocalToken();

    }, [])

    return(
        <AuthContext.Provider value={{ nome: "JOSÉ", login, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;