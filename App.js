import React, {useState} from "react";
import { TextInput, Text } from "react-native";

import Screen from './app/components/Screen';
import AccountScreen from "./app/screens/AccountScreen";
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {
  // Needto useState for reactive elements in react
  const [firstName, setFirstName] = useState('');


  return (
    <Screen>
      <Text>{firstName}</Text>
      <TextInput
        // maxLength
        // keyboardType (good for setting numeric or other kb types)
        // clearButtonMode={BOOL} // IOS only value, for clearing the value in the text box
        // secureTextEntry={BOOL} = good for password handling
        // clearButtonMode="always" -- IOS ONLY PROP
        onChangeText={text => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBottomColor: '#ccc',
          borderBottomWidth: 1,
        }}
      />
    </Screen>
  )

}
