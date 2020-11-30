import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <Text style={styles.text}>Getting the weather</Text>
        </View>
    );
}

// stylesheet api
const styles = StyleSheet.create({
    // css for view content
    container: {
      flex: 1,
      justifyContent: "flex-end",
      paddingHorizontal: 30,
      paddingVertical: 100,
      backgroundColor: "#FDF6AA"
    },
    // css for inner view content
    text: {
        color: "#2c2c2c",
        fontSize: 30
    }
  });