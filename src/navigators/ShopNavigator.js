import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryDiceScreen from '../screens/CategoryDiceScreen'
import DiceDetailScreen from '../screens/DiceDetailScreen'
import { Colors } from '../constants/colors'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
          headerTitleStyle: {
            fontFamily: 'open-sans'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={CategoriesScreen}
          options={{
            title: 'La Tienda Media'
          }}
        />
        <Stack.Screen
          name="Products"
          component={CategoryDiceScreen}
          options={({ route }) => ({ title: route.params.categoryName })}

        />
        <Stack.Screen
          name="Detail"
          component={DiceDetailScreen} 
          />
      </Stack.Navigator>
  )
}

export default ShopNavigator

