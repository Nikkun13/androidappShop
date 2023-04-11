import { Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import SimulatorNavigator from "./SimulatorNavigator";
import OrdersNavigator from "./OrdersNavigator";
import { styles } from "../../styles";

const BottomTabs = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="Shop-tab"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Entypo
                name="shop"
                size={24}
                color={focused ? "#5c0d07" : "#748C94"}
              />
              <Text style={{ color: focused ? "#5c0d07" : "#748C94" }}>
                Shop
              </Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Cart-tab"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Ionicons
                name="md-cart"
                size={24}
                color={focused ? "#5c0d07" : "#748C94"}
              />
              <Text style={{ color: focused ? "#5c0d07" : "#748C94" }}>
                Cart
              </Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Ionicons
                name="document-text"
                size={24}
                color={focused ? "#5c0d07" : "#748C94"}
              />
              <Text style={{ color: focused ? "#5c0d07" : "#748C94" }}>
                Orders
              </Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Dice-tab"
        component={SimulatorNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <FontAwesome5
                name="dice"
                size={24}
                color={focused ? "#5c0d07" : "#748C94"}
              />
              <Text style={{ color: focused ? "#5c0d07" : "#748C94" }}>
                Simulator
              </Text>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabsNavigator;
