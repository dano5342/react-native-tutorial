import React, { useState, useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


import Screen from './app/components/Screen';
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageURI, setImageURI] = useState();
  return (
    <Screen>
      <ImageInput
        imageURI={imageURI}
        onChangeImage={uri => setImageURI(uri)}
      />
    </Screen>
  );
}