import BolsaScreen from "../screens/BolsaScreen";
import React from "react";
import ResultadosScreen from "../screens/ResultadosScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from '../constants/colors'

const Stack = createNativeStackNavigator();

const SimulatorNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        headerTitleStyle: {
          fontFamily: 'open-sans'
        }
      }}>
        <Stack.Screen name="Simulator" component={BolsaScreen} />
        <Stack.Screen name="Result" component={ResultadosScreen} />
      </Stack.Navigator>
  );
};

export default SimulatorNavigator;
