import { Platform } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";
import { Colors } from "../constants/colors";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        headerTitleStyle: {
          fontFamily: "open-sans",
        },
      }}
    >
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "Carrito de compras",
        }}
      />
    </Stack.Navigator>
  );
};

export default CartNavigator;
