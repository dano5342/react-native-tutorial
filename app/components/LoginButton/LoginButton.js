import React from 'react'
import { View, Button, Platform } from 'react-native'

import colors from '../../config/colors'

import styles from './styles'

export default function LoginButton() {
    return (
        <View style={styles.view}>
            <Button 
                title="LOGIN"
                styles={styles.loginButton}
                color={ Platform.OS === "android" ? colors.primary : 'white'}
            >
            </Button>

        </View>
    )
}

