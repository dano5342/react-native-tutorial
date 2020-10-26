import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {

  return (
    <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
  );
}