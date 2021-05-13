import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainProfile from "./components/ProfileScreen";
import Setting from "./components/SettingScreen";
import Calendar from "./components/CalendarScreen";
import MyPost from "./components/MyPostScreen";
import TechnicalSupport from "./components/TechnicalSupportScreen";
import Favorites from "./components/FavoritesScreen";
import EditProfileScreen from "./components/EditProfileScreen";
import {
  MAINPROFILE,
  FAVORITES,
  CALENDAR,
  TECHNICALSUPPORT,
  SETTING,
  MYPOST,
  EDITPROFILE,
} from "../../constants/routeNames";
const Profile = ({ navigation }) => {
  const ProfileStack = createStackNavigator();
  return (
    <ProfileStack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <ProfileStack.Screen
        name={MAINPROFILE}
        component={MainProfile}
      ></ProfileStack.Screen>
      <ProfileStack.Screen
        name={FAVORITES}
        component={Favorites}
      ></ProfileStack.Screen>
      <ProfileStack.Screen
        name={CALENDAR}
        component={Calendar}
      ></ProfileStack.Screen>
      <ProfileStack.Screen
        name={TECHNICALSUPPORT}
        component={TechnicalSupport}
      ></ProfileStack.Screen>
      <ProfileStack.Screen
        name={SETTING}
        component={Setting}
      ></ProfileStack.Screen>
      <ProfileStack.Screen
        name={MYPOST}
        component={MyPost}
      ></ProfileStack.Screen>
      <ProfileStack.Screen
        name={EDITPROFILE}
        component={EditProfileScreen}
      ></ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
};

export default Profile;
