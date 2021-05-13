import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";

const ForgotPassScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.content}>
        <View style={style.buttonBack}>
          <Animatable.View animation="pulse">
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <FontAwesome name="chevron-left" color="#e7e7e7" size={20} />
            </TouchableOpacity>
          </Animatable.View>
        </View>
        <Text style={{ color: "white", fontSize: 24 }}>Password Reset</Text>
        <Text
          style={{
            color: "white",
            fontSize: 12,
            textAlign: "center",
            marginTop: 10,
            marginBottom: 40,
          }}
        >
          Enter your email , we will send you letter with link to reset password
        </Text>
        <TextInput style={style.textInput} placeholder="Email" />
        <TouchableOpacity style={style.buttonSignIn}>
          <Text style={style.buttonTextSignIn}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 90,
    alignItems: "center",
    backgroundColor: "#40B3A2",
  },
  content: {
    marginLeft: 50,
    alignItems: "center",
    marginRight: 50,
  },
  buttonBack: {
    flexDirection: "row",
    width: 300,
    justifyContent: "flex-start",
    marginBottom: 30,
  },
  buttonSignIn: {
    backgroundColor: "#E27D5F",
    marginTop: 70,
    width: 250,
    height: 45,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  buttonTextSignIn: {
    color: "white",
    fontSize: 18,
  },
  textInput: {
    marginTop: 20,
    paddingLeft: 10,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: 260,
    color: "#05375a",
  },
});

export default ForgotPassScreen;
