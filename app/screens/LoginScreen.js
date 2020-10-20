import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppForm from '../components/forms/AppForm'
import SubmitButton from '../components/forms/SubmitButton';
import AppFormField from '../components/forms/AppFormField';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
})

export default function LoginScreen() {

    return (
        <Screen style={styles.container}>
            <Image 
                source={require('../assets/logo-red.png')}
                style={styles.logo}
            />

            <AppForm
                initialValues={{email:'', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name='email'
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="login"/>
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})
