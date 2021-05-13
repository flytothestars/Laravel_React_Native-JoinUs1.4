import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    Platform,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import colors from "../../assets/theme/colors";
import { AuthContext } from '../../components/context';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { API_URL } from "../../constants/routeNames";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;

const SaveInfo = () => {

    //axios setting
    const authAxios = axios.create({
        baseURL: API_URL,
    });
    //Data
    const [image, setImage] = useState(null);
    const [nickname, setNickname] = React.useState({ nickname: "" });
    //Loader
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);
    //Image Options
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            base64: true,
            aspect: [4, 3],
            quality: 1,
        });


        //console.log("===== original Image =====");
        //console.log(result.base64);
        //console.log("===== encode Image ======");
        //setImage(result.base64)
        //console.log(image)
        if (!result.cancelled) {
            setImage(result);
        }
    };

    //Navigation
    const { saveInfo } = React.useContext(AuthContext);

    //Input Handler
    const textInputChange = (val) => {
        setNickname({
            nickname: val,
        });
    };
    //Axios send data to server
    const sendUserData = async () => {
        const userToken = await AsyncStorage.getItem("user_token");
        console.log(userToken)
        console.log(nickname)
        const result = authAxios
            .post(`/save_user_info_reg`, {
                name: nickname.nickname,
                photo: image.base64,
            }, {
                headers: { Authorization: `Bearer ${userToken}` },
            })
            .then(function (response) {
                const result = authAxios
                    .get(`/user`, {
                        headers: { Authorization: `Bearer ${userToken}` },
                    })
                    .then(async function (response) {
                        AsyncStorage.setItem("userInfo", JSON.stringify(response.data))
                    })
                saveInfoHandle();
            })
            .catch(function (err) {
                console.log(err.message + " catch");
                throw err;
            });
    }
    const saveInfoHandle = () => {
        saveInfo();
    };
    return (
        <View style={style.container}>
            <View style={style.content}>
                <View style={style.topBar}>
                    <View style={style.titleBarText}>
                        <Text style={{ fontSize: 20, color: "#555555" }}>Edit Profile</Text>

                    </View>
                    <View style={style.titleBarButton}>
                        <TouchableOpacity onPress={() => sendUserData()}>
                            <Text style={{ fontSize: 20, color: colors.white }}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ flex: 2, height: 1, backgroundColor: "#A88B78" }} />
                </View>
                <View style={style.body}>
                    <Image style={style.avatar} source={image != null ? image : require('../../assets/image/default_1.jpg')} />
                    <TouchableOpacity onPress={() => pickImage()}>
                        <Text style={style.avatarEdit}>Edit photo</Text>
                    </TouchableOpacity>
                    <Text style={style.textBody}>Nickname</Text>
                    <View style={style.action}>
                        <TextInput
                            placeholder="Nickname"
                            style={style.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                        />
                    </View>
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
    body: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        width: 140,
        height: 140,
        borderRadius: 80,
        borderWidth: 1,
    },
});

export default SaveInfo;
