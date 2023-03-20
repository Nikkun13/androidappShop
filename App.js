import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';

import MainNavigator from './src/navigators/MainNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "roboto-bold": require("./assets/fonts/RobotoSlab-Bold.ttf"),
  })

  React.useEffect(() =>{
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  return (
    <MainNavigator />
  );
}