import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';


import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
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

            <Formik
                initialValues={{email:'', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            onChange={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <AppText style={{color:'red'}}>
                            {errors.email}
                        </AppText>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChange={handleChange('password')}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <AppText style={{color:'red'}}>
                            {errors.password}
                        </AppText>
                        <AppButton
                            title="Login"
                            onPress={handleSubmit}
                        />
                    </>
                ) }
            </Formik>
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
