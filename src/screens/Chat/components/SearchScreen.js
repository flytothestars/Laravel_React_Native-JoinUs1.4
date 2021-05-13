import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import colors from '../../../assets/theme/colors';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { API_URL } from "../../../constants/routeNames";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;


const Chat = ({ navigation }) => {

    //Axios
    const authAxios = axios.create({
        baseURL: API_URL,
    });

    //Search
    const [filterData, setFilterData] = useState();
    const [masterData, setMasterData] = useState([]);

    //Search options
    const fetchUser = async () => {
        const userToken = await AsyncStorage.getItem("user_token");
        const result = authAxios
            .get(`/allUser`, {
                headers: { Authorization: `Bearer ${userToken}` },
            })
            .then(async function (response) {
                console.log(response.data.user);
                setFilterData(response.data.user);
            })
            .catch(function (err) {
                {
                    //console.log(response.data.user);
                    //
                    //setMasterData(response.data.user);
                }
                console.log(err);
            });
    }

    useEffect(() => {
        fetchUser();
        console.log("===== filter =====");
        console.log(filterData);
        console.log("===== master =====");
        console.log(masterData);
    }, []);

    /*const getData = async () => {
        const userToken = await AsyncStorage.getItem("user_token");
        console.log(userToken)
        const result = authAxios
            .get(`/allUser`, {
                headers: { Authorization: `Bearer ${userToken}` },
            })
            .then(async function (response) {

                console.log(response.data);
            })
            .catch(function (err) {

                console.log(err);
            });
    };*/
    const itemView = ({ item }) => {
        return (
            <Text>
                {item}
            </Text>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.titleBarText}>
                    <FontAwesome
                        style={{ marginRight: 3 }}
                        name="search"
                        color={colors.buttonColor}
                        size={26}
                    />
                    <TextInput placeholder={"Search"} />

                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 30, marginRight: 30 }}>
                    <View style={{ flex: 2, height: 1, backgroundColor: "#A88B78" }} />
                </View>
                <FlatList
                    data={filterData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={itemView}
                ></FlatList>
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