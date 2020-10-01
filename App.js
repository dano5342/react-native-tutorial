import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text

} from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons'

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from './app/components/AppText'

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText> I Love React Native</AppText>
    </View>
  );
}