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
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';

export default function App() {
  return (
    <WelcomeScreen></WelcomeScreen>
  );
}