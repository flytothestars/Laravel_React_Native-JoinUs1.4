import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import colors from "../../../assets/theme/colors";

const windowWidth = Dimensions.get("window").width;

const SettingScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.content}>
        <View style={style.topBar}>
          <View style={style.titleBarText}>
            <Text style={{ fontSize: 20, color: "#555555" }}>Setting</Text>
          </View>
          <View style={style.titleBarButton}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ fontSize: 20, color: colors.white }}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 2, height: 1, backgroundColor: "#A88B78" }} />
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
    paddingTop: 90,
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
