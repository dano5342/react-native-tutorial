import React, {useState} from "react";
import { TextInput, Text } from "react-native";

import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

import AccountScreen from "./app/screens/AccountScreen";
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import { Switch } from "react-native-gesture-handler";



export default function App() {
  return (
    <Screen>    
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email"/>
    </Screen>

  )

}
