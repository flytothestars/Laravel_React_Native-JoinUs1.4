import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import { LOGIN, REGISTER, FORGOTPASS, SAVEINFOAFTERREG } from "../constants/routeNames";
import Login from "../screens/Login/index";
import Register from "../screens/Register/index";
import ForgotPass from "../screens/ForgotPassScreen";
import SaveInfo from '../screens/Register/SaveInfo';

const AuthStack = createStackNavigator();
const AuthNavigator = ({ navigation }) => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Register}></AuthStack.Screen>
      <AuthStack.Screen
        name={FORGOTPASS}
        component={ForgotPass}
      ></AuthStack.Screen>
      <AuthStack.Screen
        name={SAVEINFOAFTERREG}
        component={SaveInfo}
      ></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
