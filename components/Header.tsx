import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Appbar } from "react-native-paper";
const Header = ({ navigation }: any) => {
  return (
    <Appbar.Header>
      <Appbar.Content
        title="All TASKS"
        titleStyle={styles.fontsize}
        style={styles.alignment}
      />
      <Appbar.Action
        icon="plus"
        onPress={() => navigation.navigate("ModalScreen")}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  alignment: {
    alignContent: "center",
  },
  fontsize: {
    fontSize: 25,
  },
});
export default Header;
