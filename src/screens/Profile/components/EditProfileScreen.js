import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../../assets/theme/colors";

const windowWidth = Dimensions.get("window").width;

const SettingScreen = ({ navigation }) => {
  function saveUserInfo() {}

  return (
    <View style={style.container}>
      <View style={style.content}>
        <View style={style.topBar}>
          <View style={style.titleBarText}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ fontSize: 20, color: "#555555" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={style.titleBarButton}>
            <TouchableOpacity onPress={() => saveUserInfo()}>
              <Text style={{ fontSize: 20, color: colors.white }}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 2, height: 1, backgroundColor: "#A88B78" }} />
        </View>
        <View style={style.body}>
          <Image style={style.avatar}></Image>
          <TouchableOpacity>
            <Text style={style.avatarEdit}>Edit photo</Text>
          </TouchableOpacity>
          <Text style={style.textBody}>Nickname</Text>
          <TextInput style={style.textInputBody}></TextInput>
          <Text style={style.textBody}>Email</Text>
          <TextInput style={style.textInputBody}></TextInput>
          <Text style={style.textBody}>State/Region</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "#40B3A2",
  },
  content: {
    marginLeft: 30,
    alignItems: "center",
    marginRight: 30,
  },

  topBar: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: windowWidth - 70,
  },
  titleBarText: {
    marginBottom: 10,
    justifyContent: "flex-start",
  },
  titleBarButton: {
    marginBottom: 10,
    justifyContent: "flex-end",
  },
});

export default SettingScreen;
