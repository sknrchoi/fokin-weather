import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // bridge for native core
    <View style={styles.container}>
      <View style={styles.yelloView}></View>
      <View style={styles.blueView}></View>
    </View>
  );
}

// stylesheet api
const styles = StyleSheet.create({
  // css for view content
  container: {
    flex: 1,
  },
  // css for inner view content
  yelloView: {
    flex: 1,
    backgroundColor: "yello"
  },
  blueView: {
    flex: 3,
    backgroundColor: "blue"
  }
});
