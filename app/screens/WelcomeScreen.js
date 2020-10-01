import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View} from 'react-native'
import colors from '../config/colors'

export default function WelcomeScreen() {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/images/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image source={require('../assets/images/logo-red.png')} style={styles.logo}/>
                <Text> Sell What You Don't Need</Text>
            </View>
            <View style ={styles.loginButton}></View>
            <View style ={styles.registerButton}></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: 'center'
    },
    logo: {
       width: 100,
       height: 100, 
       
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
    },
    
})