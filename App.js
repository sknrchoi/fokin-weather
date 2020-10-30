import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // bridge for native core
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
    </View>
  );
}

// stylesheet api
const styles = StyleSheet.create({
  // css for view content
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  // css for text content
  text: {
    color: "white"
  }
});
