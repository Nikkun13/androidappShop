import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./TabsNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";

const MainNavigator = () => {
  //const isAuth = useSelector((state) => state.auth.userId);
  const isAuth=true
  return (
    <NavigationContainer>
      {isAuth ? <TabsNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
