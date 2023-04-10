import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GlobalStyles } from "./src/styles/global.styles";
import { SafeAreaView, StatusBar } from "react-native";
import Splash from "./src/screens/Splash/Splash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./src/screens/Menu/Menu";
import Item from "./src/screens/Item/Item";
import ThankYou from "./src/screens/ThankYou/ThankYou";
import CoffeProvider from "./src/Context/CoffeProvider";

const { safeAreaViewContainer } = GlobalStyles;
const headerShownBool = false;
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <CoffeProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={"#d5c0ad"} barStyle={"dark-content"} />
        <SafeAreaView style={safeAreaViewContainer}>
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: headerShownBool }} />
            <Stack.Screen name="Menu" component={Menu} options={{ headerShown: headerShownBool }} />
            <Stack.Screen name="Item" component={Item} options={{ headerShown: headerShownBool }} />
            <Stack.Screen name="ThankYou" component={ThankYou} options={{ headerShown: headerShownBool }} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </CoffeProvider>

  );
};


export default App;
