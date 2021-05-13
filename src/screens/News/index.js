import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#40B3A2",
  },
});

const News = () => {
  return (
    <View style={styles.container}>
      <Text>News Djoni</Text>
    </View>
  );
};

export default News;
