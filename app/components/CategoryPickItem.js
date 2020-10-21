import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

import Icon from './Icon';
import AppText from './AppText';


function CategoryPickItem({ item, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Icon
                    label={item.label}
                    backgroundColor={item.backgroundColor}
                    name={item.icon}
                    size={80}
                />
            </TouchableOpacity>
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 30,
      paddingVertical: 15,
      alignItems: "center",
      width: "33%",
    },
    label: {
      marginTop: 5,
      textAlign: "center",
    },
});

export default CategoryPickItem