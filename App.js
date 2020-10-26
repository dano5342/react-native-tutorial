import React, { useState, useEffect } from "react";
import { Button, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Screen from './app/components/Screen';

export default function App() {

  const Link = () => {
    const navigation = useNavigation();
    return (
    <Button title="click" onPress={() => navigation.navigate("TweetDetails", {id: 1})}/>
    )
  }

  const Tweets = ({ navigation }) => (
    <Screen>
      <Text> Tweets </Text>
      <Link/>
    </Screen>
  )

  const TweetDetails = ({ route }) => (
    <Screen>
      <Text>Tweet Details{route.params.id}</Text>
    </Screen>
  )
  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'dodgerblue'},
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen 
        name="Tweets" 
        component ={Tweets}
        options={{  // Must be returned as an object or as some form of function
          headerStyle: { backgroundColor: 'tomato'},
          headerTintColor: 'white',
        }}
        />
      <Stack.Screen 
        name="TweetDetails"
        component ={TweetDetails}
        options={ ({ route }) => ({title: route.params.id})} // Programitically assign keys to properties
        />
    </Stack.Navigator>
  )
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}