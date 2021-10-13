import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Main from "../pages/Main";
import Modal from "../pages/Modal";

const Navigation = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="MainScreen"
          component={Main}
          options={{ headerShown: false }}
        />
        <stack.Group screenOptions={{ presentation: "modal" }}>
          <stack.Screen name="ModalScreen" component={Modal} />
        </stack.Group>
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
