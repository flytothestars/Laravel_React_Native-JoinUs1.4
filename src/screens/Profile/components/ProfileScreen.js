import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { AuthContext } from "../../../components/context";
import axios from "axios";
import colors from "../../../assets/theme/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  CALENDAR,
  FAVORITES,
  MYPOST,
  SETTING,
  TECHNICALSUPPORT,
  EDITPROFILE,
  API_URL,
  API_STORAGE
} from "../../../constants/routeNames";

const windowWidth = Dimensions.get("window").width;

const ProfileScreen = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);
  const [userData, setUserData] = useState({
    id: "",
    email: "",
    nickname: "",
    photo: "",
  });

  const authAxios = axios.create({
    baseURL: API_URL,
  });
  useEffect(() => {
    getData();
    //console.log(userData);
  }, []);

  const getData = async () => {
    const userToken = await AsyncStorage.getItem("user_token");
    const userInfo = await AsyncStorage.getItem("userInfo");
    //console.log("==============");
    //console.log(JSON.parse(userInfo));
    const result = authAxios
      .get(`/user`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then(async function (response) {
        setUserData({
          id: response.data.user.id,
          email: response.data.user.email,
          nickname: response.data.user.name,
          photo: response.data.user.photo,
        });
        //console.log(userData);
        //console.log(response.data);
      })
      .catch(function (err) {
        setUserData({
          id: JSON.parse(userInfo).user.id,
          email: JSON.parse(userInfo).user.email,
          nickname: JSON.parse(userInfo).user.name,
          photo: JSON.parse(userInfo).user.photo,
        });
        //console.log(err);
      });
  };

  return (
    <View style={style.container}>
      <View style={style.content}>
        <View style={style.titleBarText}>
          <Text style={{ fontSize: 20, color: "#555555" }}>Profile</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 2, height: 1, backgroundColor: "#A88B78" }} />
        </View>

        <View style={style.header}>
          <View style={style.avatarView}>
            <Image
              style={style.avatarUser}
              source={userData.photo != "" ? { uri: `${API_STORAGE + userData.photo}` } : require("../../../assets/image/default_1.jpg")}
            ></Image>
          </View>
          <View style={style.infoUser}>
            <Text style={style.headerNameText}>{userData.nickname}</Text>
            <Text style={style.headerEmailText}>{userData.email}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(EDITPROFILE)}>
              <Text style={style.headerButtonText}>Edit profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.body}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flex: 2, height: 1, backgroundColor: colors.white }}
            />
          </View>
          <View style={style.viewButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(FAVORITES);
              }}
            >
              <Text style={style.textButton}>Favorites</Text>
            </TouchableOpacity>
            <FontAwesome
              style={style.iconsButton}
              name="heart"
              color={colors.buttonColor}
              size={26}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flex: 2, height: 1, backgroundColor: colors.white }}
            />
          </View>
          <View style={style.viewButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(CALENDAR);
              }}
            >
              <Text style={style.textButton}>Calendar</Text>
            </TouchableOpacity>
            <FontAwesome
              style={style.iconsButton}
              name="chevron-right"
              color={colors.buttonColor}
              size={22}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flex: 2, height: 1, backgroundColor: colors.white }}
            />
          </View>
          <View style={style.viewButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(TECHNICALSUPPORT);
              }}
            >
              <Text style={style.textButton}>Technical Support</Text>
            </TouchableOpacity>
            <FontAwesome
              style={style.iconsButton}
              name="chevron-right"
              color={colors.buttonColor}
              size={22}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flex: 2, height: 1, backgroundColor: colors.white }}
            />
          </View>
          <View style={style.viewButton}>
            <TouchableOpacity
              style={style.touchbutton}
              onPress={() => {
                navigation.navigate(SETTING);
              }}
            >
              <Text style={style.textButton}>Setting</Text>
            </TouchableOpacity>
            <FontAwesome
              style={style.iconsButton}
              name="chevron-right"
              color={colors.buttonColor}
              size={22}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flex: 2, height: 1, backgroundColor: colors.white }}
            />
          </View>
          <View style={style.viewButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(MYPOST);
              }}
            >
              <Text style={style.textButton}>My Post</Text>
            </TouchableOpacity>
            <FontAwesome
              style={style.iconsButton}
              name="chevron-right"
              color={colors.buttonColor}
              size={22}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{ flex: 2, height: 1, backgroundColor: colors.white }}
            />
          </View>

          <TouchableOpacity
            style={style.buttonSignOut}
            onPress={() => {
              signOut();
            }}
          >
            <Text style={style.buttonTextSignOut}>LogOut</Text>
          </TouchableOpacity>
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
  titleBarText: {
    flexDirection: "row",
    width: windowWidth - 70,
    marginBottom: 10,
    justifyContent: "flex-start",
  },
  header: {
    height: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarView: {
    justifyContent: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  avatarUser: {
    width: 140,
    height: 140,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: colors.buttonColor,
  },
  infoUser: {
    flex: 1,
  },
  headerNameText: {
    fontSize: 28,
    color: colors.white,
    marginBottom: 10,
  },
  headerEmailText: {
    fontSize: 14,
    color: colors.white,
  },
  headerButtonText: {
    marginTop: 10,
    fontSize: 14,
    color: colors.white,
  },
  body: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
  },
  viewButton: {
    justifyContent: "space-between",
    width: windowWidth - 70,
    flexDirection: "row",
    marginBottom: 3,
    paddingRight: 20,
    marginTop: 3,
  },
  textButton: {
    color: colors.white,
    fontSize: 24,
  },
  iconsButton: {
    marginTop: 3,
  },
  buttonSignOut: {
    marginTop: 30,
    backgroundColor: "#E27D5F",
    width: 250,
    height: 45,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  buttonTextSignOut: {
    color: "white",
    fontSize: 18,
  },
});

export default ProfileScreen;
