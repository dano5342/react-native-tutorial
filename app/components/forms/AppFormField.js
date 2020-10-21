import React from 'react';
import { StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';



import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
export default function AppFormField({name, width, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChange={handleChange(name)}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}

const styles = StyleSheet.create({})
