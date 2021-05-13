import React, { useLayoutEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import colors from '../../../assets/theme/colors';
import { CHATSCREEN, SEARCHSCREEN } from '../../../constants/routeNames';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const windowWidth = Dimensions.get("window").width;


const Mess = [
    {
        id: '1',
        userName: "Biz",
        userImg: require("../../../assets/image/default_1.jpg"),
        messTime: "4 min ago",
        messText: "Hi Sabino"
    },
]

const Chat = ({ navigation }) => {

    /*
    const [searchVisibility, setSearchVisibility] = useState(false);
    const changeWindow = () => {
        if (searchVisibility) {
            setSearchVisibility(false)
        }
        else {
            setSearchVisibility(true)
        }
    }*/

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {//searchVisibility != true ?
                }

                <View style={styles.titleBarText}>
                    <Text style={{ fontSize: 20, color: "#555555" }}>Chat</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(SEARCHSCREEN)}>
                        <FontAwesome
                            style={{ marginRight: 3 }}
                            name="search"
                            color={colors.buttonColor}
                            size={26}
                        />
                    </TouchableOpacity>

                </View>
                {/*
                    <View style={styles.titleBarText}>
                        <FontAwesome
                            style={{ marginRight: 3 }}
                            name="search"
                            color={colors.buttonColor}
                            size={26}
                        />
                        <TextInput placeholder={"Search"} />
                        <TouchableOpacity onPress={() => changeWindow()}>
                            <Text>Back</Text>
                        </TouchableOpacity>
                    </View>
                   */}
                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 30, marginRight: 30 }}>
                    <View style={{ flex: 2, height: 1, backgroundColor: "#A88B78" }} />
                </View>
                {//searchVisibility != true ?
                }
                <View style={styles.card}>
                    <FlatList
                        data={Mess}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.card}
                                onPress={() => navigation.navigate(CHATSCREEN)}
                            >
                                <View style={styles.userInfo}>
                                    <View style={styles.userImgWrapper}>
                                        <Image style={styles.userImg} source={item.userImg} />
                                    </View>
                                    <View style={styles.textSection}>
                                        <View style={styles.userInfoText}>
                                            <Text style={styles.userName}>{item.userName}</Text>
                                            <Text style={styles.postTime}>{item.messTime}</Text>
                                        </View>
                                        <Text style={styles.messageText}>{item.messText}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingTop: 40,
        alignItems: "center",
        backgroundColor: "#40B3A2",
    },
    content: {
        alignItems: "center",
    },
    titleBarText: {
        flexDirection: "row",
        marginLeft: 30,
        marginRight: 30,
        width: windowWidth - 70,
        marginBottom: 10,
        justifyContent: "space-between",
    },

    //========================== Message style
    card: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 30,
        alignItems: "center",
    },
    userInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    userImgWrapper: {
        paddingTop: 15,
        paddingBottom: 15
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textSection: {
        flexDirection: "column",
        justifyContent: "center",
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    },
    userInfoText: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    userName: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.white
    },
    postTime: {
        fontSize: 12,
        color: "#666"
    },
    messageText: {
        fontSize: 14,
        color: "#333333"
    }

});

export default Chat;