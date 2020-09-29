import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback, 
  Button,
 } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button 
        color="#123442"
        title="Click Me" onPress={() => { console.log('Button Tapped')}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },
});
