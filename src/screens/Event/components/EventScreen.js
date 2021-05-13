import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../../assets/theme/colors";

const windowWidth = Dimensions.get("window").width;

const EventScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.content}>
        <View style={style.topBar}>
          <View style={style.titleBarText}>
            <Text style={{ fontSize: 20, color: "#555555" }}>Add Event</Text>
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

        <View style={style.body}>
          <Text style={style.textTitleInput}>Title</Text>
          <View style={style.action}>
            <TextInput
              style={style.inputText}
              autoCapitalize="none"
            ></TextInput>
          </View>
          <Text style={style.textTitleInput}>Description</Text>
          <View style={style.action}>
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={(style.inputText, { height: 100 })}
              autoCapitalize="none"
            ></TextInput>
          </View>
          <Text style={style.textTitleInput}>Price</Text>
          <View style={style.action}>
            <TextInput
              style={style.inputText}
              autoCapitalize="none"
            ></TextInput>
          </View>
          <Text style={style.textTitleInput}>Location</Text>
          <View style={style.action}>
            <TextInput
              style={style.inputText}
              autoCapitalize="none"
            ></TextInput>
          </View>
          <Text style={style.textTitleInput}>Date</Text>
          <View style={style.action}>
            <TextInput
              style={style.inputText}
              autoCapitalize="none"
            ></TextInput>
          </View>
          <Text style={style.textTitleInput}>Tag Category</Text>
          <View style={style.action}>
            <TextInput
              style={style.inputText}
              autoCapitalize="none"
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={style.buttonSignIn}>
          <Text style={style.buttonTextSignIn}>Save</Text>
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
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "#40B3A2",
  },
  content: {
    marginLeft: 30,
    alignItems: "center",
    marginRight: 30,
  },

  //Header
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

  // Text and Input
  body: {
    width: windowWidth - 90,
  },
  textTitleInput: {
    color: colors.white,
    marginBottom: 5,
    marginTop: 5,
  },
  action: {
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.primaryWhite,
  },
  inputText: {},
  //Button save
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

});

export default EventScreen;
