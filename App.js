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
 } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> 
        Hello, React Native!
      </Text>
      <TouchableNativeFeedback
        onPress={() => { console.log('Native Tapped') }}
      >
        <View
          style={{width: 200, height: 70, backgroundColor: 'dodgerblue'}}
        ></View>
      </TouchableNativeFeedback>
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
