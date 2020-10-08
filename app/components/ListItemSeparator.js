import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../config/colors';


export default function ListItemSeparator() {
    return (
        <View style={styles.seperator}/>
    )
}

const styles = StyleSheet.create({
    seperator: {
        width: "100%",
        height: 1,
        backgroundColor: colors.light,
    }
})