import BolsaScreen from "../screens/BolsaScreen";
import React from "react";
import ResultadosScreen from "../screens/ResultadosScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const SimulatorNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Bag" component={BolsaScreen} />
        <Stack.Screen name="Result" component={ResultadosScreen} />
      </Stack.Navigator>
  );
};

export default SimulatorNavigator;
