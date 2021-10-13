import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  Provider as PaperProvider,
  DarkTheme as PaperDark,
} from "react-native-paper";
import Navigation from "./navigator";
import Main from "./pages/Main";

export default function App() {
  return (
    <PaperProvider theme={PaperDark}>
      <Navigation />
    </PaperProvider>
  );
}
