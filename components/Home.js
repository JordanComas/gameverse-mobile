import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Switch,
  Button,
  Pressable,
} from "react-native";
import controller from "../images/controller.gif";
import { LinearGradient } from "expo-linear-gradient";

export default function Home(props) {
  const [name, setName] = React.useState("");
  const [toggle, setToggle] = React.useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <LinearGradient
          colors={["#e25b70", "#e57c64"]}
          style={styles.background}
        >
          <View style={styles.leftCol}>
            <Text style={styles.title}>SEARCH FOR ONLY THE BEST GAMES</Text>
            <Text style={styles.desc}>
              Search, play, invest &amp; join the fight on any game you desire
              most with Gameverse
            </Text>
            <Image source={controller} style={styles.image} />
            <Pressable
              style={styles.button}
              onPress={() => props.navigation.navigate("About")}
            >
              <Text style={styles.buttonText}>START HERE</Text>
            </Pressable>
          </View>
          <StatusBar style="auto" />
        </LinearGradient>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    flexWrap: "wrap",
    width: 360,
    fontSize: 37,
    color: "#fff",
    fontWeight: "bold",
  },
  desc: {
    textAlign: "center",
    flexWrap: "wrap",
    width: 300,
    fontSize: 15,
    color: "#fff",
    margin: 20,
  },
  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    width: 150,
    margin: 20,
  },
  background: {
    alignItems: "center",
    justifyContent: "center",
    height: 725,
    width: 400,
    // alignSelf: "stretch",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // bottom: 200,
    // left: 100,
    width: 150,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#572dea",
    margin: 20,
  },
  buttonText: {
    color: "#fff",
    borderBottomColor: "white",
  },
  leftCol: {
    // flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
