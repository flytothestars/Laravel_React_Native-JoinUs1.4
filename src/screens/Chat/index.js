import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { CHATSCREEN, MESSAGES, SEARCHSCREEN } from "../../constants/routeNames";
import ChatScreen from "./components/ChatScreen";
import Messages from "./components/MessagesScreen";
import SearchScreen from "./components/SearchScreen";

const Chat = ({ navigation }) => {
    const ChatStack = createStackNavigator();
    return (
        <ChatStack.Navigator
            screenOptions={{
                header: () => null,
            }}>
            <ChatStack.Screen name={MESSAGES}
                component={Messages} />

            <ChatStack.Screen name={CHATSCREEN}
                component={ChatScreen} />
            <ChatStack.Screen name={SEARCHSCREEN}
                component={SearchScreen} />

        </ChatStack.Navigator>
    );
}

export default Chat;