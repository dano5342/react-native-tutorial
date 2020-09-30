import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";



export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: 'row', // Horizontal
      justifyContent: "center", // Main axis
      alignItems: 'center', // secondary axis
    }}>
      <View 
        style={{
          backgroundColor: 'dodgerblue',
          width: 400,
          height: 100,
          flex: -1,
        }}
      />
      <View 
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
        }}
      />
      <View 
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
        }}
      />

    </View>
  );
}

