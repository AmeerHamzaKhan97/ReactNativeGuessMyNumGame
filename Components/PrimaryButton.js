import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import Color from "../Screens/utils/color";

function PrimaryButton(props) {
  // const buttonHandler = () => {
  //   console.log("pressed");
  // };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={props.onPress}
        android_ripple={{ color: Color.primary600 }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Color.primary500,

    paddingVertical: 8,
    paddingHorizontal: 16,

    elevation: 4,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  // ripple effort for ios
  pressed: {
    opacity: 0.25,
  },
});
