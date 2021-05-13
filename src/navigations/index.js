import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";
import SaveInfo from "../screens/Register/SaveInfo";
import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../components/context";
import { API_URL } from "../constants/routeNames";

const AppNavContainer = () => {
  //Initial State
  const initialLoginState = {
    isLoading: true,
    userID: null,
    userToken: null,
    saveInfo: false,
  };

  //axios setting
  const authAxios = axios.create({
    baseURL: API_URL,
  });

  //State Login
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
          saveInfo: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userID: action.id,
          userToken: action.token,
          isLoading: false,
          saveInfo: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userID: null,
          userToken: null,
          isLoading: false,
          saveInfo: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userID: action.id,
          userToken: action.token,
          isLoading: false,
          saveInfo: true,
        };
      case "SAVEINFO":
        return {
          ...prevState,
          isLoading: false,
          saveInfo: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  //Setting, axios POST login, register, logout
  const authContext = React.useMemo(
    () => ({
      signIn: async (email, password) => {
        let userToken;
        userToken = null;

        const result = authAxios
          .post(`/login`, {
            email: email,
            password: password,
          })
          .then(function (response) {
            console.log(response.data);
            userToken = response.data.token;
            AsyncStorage.setItem("user_token", response.data.token);
            const result = authAxios
              .get(`/user`, {
                headers: { Authorization: `Bearer ${userToken}` },
              })
              .then(async function (response) {
                AsyncStorage.setItem("userInfo", JSON.stringify(response.data))
              })
            return dispatch({ type: "LOGIN", id: email, token: userToken });
          })
          .catch(function (err) {
            console.log(err.message + " catch");
            throw err;
          });
      },
      saveInfo: async () => {
        return dispatch({ type: "SAVEINFO" });
      },
      signUp: async (email, password) => {
        let userToken;
        userToken = null;
        const result = authAxios
          .post(`/register`, {
            email: email,
            password: password,
          })
          .then(function (response) {
            console.log(response.data);
            console.log(response.data.user);
            userToken = response.data.token;
            AsyncStorage.setItem("user_token", response.data.token);
            return dispatch({ type: "REGISTER", id: email, token: userToken });
          })
          .catch(function (err) {
            console.log(err.message + " catch");
            throw err;
          });
      },

      signOut: async () => {
        try {
          await AsyncStorage.removeItem("user_token");
          await AsyncStorage.removeItem("userInfo");
        } catch (err) {
          console.log(err);
        }
        dispatch({ type: "LOGOUT" });
      },
    }),
    []
  );
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("user_token");
      } catch (err) {
        console.log(err);
      }
      return dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 100);
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken != null ? (loginState.saveInfo ? <SaveInfo /> : <HomeNavigator />) : <AuthNavigator />
        }
        {//<SaveInfo />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default AppNavContainer;

/*
const apiUrl = "http://localhost:8000/api";

useEffect(() => {
    getStorageValue();
  }, []);



  async function getStorageValue() {
    let value = "";
    try {
      value = (await AsyncStorage.getItem('user_token')) || "";
      console.log(value ? value : "Not Token")
    } catch (e) {
      console.log(e);
    } finally {
      setToken(value);
    }
  }



const authAxios = axios.create({
  baseURL: apiUrl,
});
authAxios.interceptors.request.use(function(config){
  //const value = AsyncStorage.getItem('user_token');
  //console.log(value);
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});
*/

/*async function login(){
  try{
    const result = await authAxios.post(`/login`,{
      email: "sen@sen.com",
      password: "qwerty123"
    }).then((response) => {
      console.log(response.data.token);
      AsyncStorage.setItem('user_token', response.data.token);
    })
  }catch(err){
    console.log(err.message);
  }
}
*/
