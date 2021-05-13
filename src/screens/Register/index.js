import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { AuthContext } from "../../components/context";

const Register = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const { signUp } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const registerHandle = (email, password) => {
    signUp(email, password);
  };

  return (
    <View style={style.container}>
      <View style={style.content}>
        <Text style={style.textSignIn}>SIGN UP</Text>
        <View style={style.body}>
          <Text style={style.text}>Email</Text>
          <View style={style.action}>
            <FontAwesome name="user-o" color="#e7e7e7" size={20} />
            <TextInput
              placeholder="Login"
              style={style.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather
                  style={style.styleFeather}
                  name="check-circle"
                  color="green"
                  size={20}
                />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={style.text}>Password</Text>
          <View style={style.action}>
            <FontAwesome
              style={{ marginLeft: 5 }}
              name="lock"
              color="#e7e7e7"
              size={20}
            />
            <TextInput
              placeholder="Password"
              style={style.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather
                  style={style.styleFeather}
                  name="eye-off"
                  color="grey"
                  size={20}
                />
              ) : (
                <Feather
                  style={style.styleFeather}
                  name="eye"
                  color="grey"
                  size={20}
                />
              )}
            </TouchableOpacity>
          </View>
          <Text style={style.text}>Confirm Password</Text>
          <View style={style.action}>
            <FontAwesome
              style={{ marginLeft: 5 }}
              name="lock"
              color="#e7e7e7"
              size={20}
            />
            <TextInput
              placeholder="Confirm Password"
              style={style.textInput}
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
          </View>
        </View>

        <TouchableOpacity
          style={style.buttonSignIn}
          onPress={() => {
            registerHandle(data.email, data.password);
          }}
        >
          <Text style={style.buttonTextSignIn}>SIGN UP</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", marginBottom: 30 }}>
          <Text style={{ color: "#83CDCC", fontSize: 14 }}>
            Already have an account ?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={{ color: "#83CDCC", fontSize: 14 }}> Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
          <View>
            <Text style={{ width: 50, textAlign: "center", color: "white" }}>
              or
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "white" }} />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: 300,
            justifyContent: "space-around",
            marginTop: 40,
          }}
        >
          <TouchableOpacity style={style.buttonSocial}>
            <Image source={require("../../assets/icons/google_48px.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={style.buttonSocial}>
            <Image source={require("../../assets/icons/facebook_48px.png")} />
          </TouchableOpacity>
        </View>

        <Text style={{ marginTop: 60, color: "#83CDCC", fontSize: 14 }}>
          By using our services, you agree to the Terms of Service and privacy
          statement.
        </Text>
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
  buttonSignIn: {
    backgroundColor: "#E27D5F",
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
  buttonSocial: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textSignIn: {
    color: "white",
    fontSize: 36,
  },
  text: {
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    width: 260,
    color: "#05375a",
  },
});

export default Register;
