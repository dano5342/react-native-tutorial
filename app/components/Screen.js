import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import Constants from "expo-constants";
import colors from '../config/colors';

export default function Screen({children}) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex:1,
        backgroundColor: colors.white,
    }
})
