import React from "react";
import Layardepan from "./Layardepan";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

//! EXPORT PLACE
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Layardepan />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}