import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../../Screens/utils/color";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Color.primary500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  numberText: {
    color: Color.primary500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
