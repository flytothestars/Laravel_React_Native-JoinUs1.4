import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import EventScreen from "./components/EventScreen";
import { MAINEVENT } from "../../constants/routeNames";

const EventStack = createStackNavigator();

const Event = ({ navigation, route }) => {
  return (
    <EventStack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <EventStack.Screen
        name={MAINEVENT}
        component={EventScreen}
      ></EventStack.Screen>
    </EventStack.Navigator>
  );
};

export default Event;
