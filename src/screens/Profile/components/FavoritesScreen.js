import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FavoritesScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text>Favorites page</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
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
});

export default FavoritesScreen;
