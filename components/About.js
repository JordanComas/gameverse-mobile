import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";

export default function About({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>About Page</Text>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
  },
  image: {
    height: 100,
    width: 100,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
  },
});
