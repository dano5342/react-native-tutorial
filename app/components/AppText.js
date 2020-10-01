import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'

export default function AppText({ children }) {
    return (

        <Text style={styles.text}>
            {children}
        </Text>
    )
}

Platform.select({
    ios: {
        fontSize: 20,
        fontFamily: 'Avenir',
    },
    android: {
        fontSize: 18,
        fontFamily: "Roboto"
    }
})


const styles = StyleSheet.create({
    text: {
        color: "tomato",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: 'Avenir',
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            }
        })
    }
})
