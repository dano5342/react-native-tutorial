# DoneWithIt
Following a Mosh tutorial on React Native in preparation for App Build @ Hadageto
To follow the tutorial yourself please visit this [link](https://www.youtube.com/watch?time_continue=179&v=0-S5a0eXPoc&feature=emb_logo)

## How to run this project
Make sure you have either the LTS version or current version of Node.js installed.
```
npm install -g n
n latest
```
Then install react native & expo cli
```
npm install -g react-native && npm install -g expo-cli
```

You'll also need XCode for running an [Iphone emulator](https://developer.apple.com/xcode/) and Android Studio for running an [Android Emulator](https://developer.android.com/studio).

Once this is completed run `expo init myApp`
Make sure to `cd` into the app directory.
then run either `$ expo start` OR `$ npm start`
If you have issues with `$npm start` check your `npm config get ignore-scripts` if this is `true` set it to false: `npm config set ignore-scripts false`

## Technologies Used



## Good Imports
SafeAreaView: Good for phones with overlaid hardware (Iphone 11)