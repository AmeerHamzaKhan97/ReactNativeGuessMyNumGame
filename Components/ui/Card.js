import React, { Children } from "react";
import { StyleSheet, View } from "react-native";
import Color from "../../Screens/utils/color";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Color.primary700,
    // for android to give boxshadow
    elevation: 8,
    // for ios to give boxshadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
});
