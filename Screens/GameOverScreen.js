import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import Title from "../Components/Title";
import Color from "./utils/color";

function GameOverScreen({ roundNumber, userNumber, onStartGame }) {
  return (
    <>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        {/* <View style={styles.imageContainer}>
        <Image source={require("../assets/image/success.png")} />
      </View> */}

        <Text style={styles.summaryText}>
          Your phone need <Text style={styles.highlight}>{roundNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}> {userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartGame}> New Game</PrimaryButton>
      </View>
    </>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: "300",
    height: "300",
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Color.primary700,
    overflow: "hidden",
    margin: 36,
  },

  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },

  highlight: {
    fontFamily: "open-sans-bold",
    color: Color.primary700,
  },
});
