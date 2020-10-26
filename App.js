import React, { useState, useEffect } from "react";
import { Button, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from './app/components/Screen';


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

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black"
    }}
  >
    <Tab.Screen 
      name="Feed" 
      component={Tweets} 
      options={{
        tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color} />
      }}
    />
    <Tab.Screen 
      name="Account" 
      component={Account} 
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
      }}
      />
  </Tab.Navigator>
)

export default function App() {

  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}