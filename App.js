import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./src/store";
import MainNavigator from "./src/navigators/MainNavigator";
import { init } from "./src/db";

SplashScreen.preventAutoHideAsync();

init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Database fail connect");
    console.log(err.message);
  });

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "roboto-bold": require("./assets/fonts/RobotoSlab-Bold.ttf"),
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
