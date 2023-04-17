import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./TabsNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";

const MainNavigator = () => {
  const isAuth = useSelector((state) => state.auth.userId);
  //La siguiente linea la uso cuando tengo que probar cosas y ahorrar tiempo
  //con la autentificacion que sé que funciona
  //const isAuth=true
  return (
    <NavigationContainer>
      {isAuth ? <TabsNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
