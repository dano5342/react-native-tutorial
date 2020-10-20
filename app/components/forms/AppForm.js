import React from 'react'
import { View, Text } from 'react-native'

import { Formik } from 'formik';

export default function AppForm({initialValues, onSubmit, validationSchema, children}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        > 
            { () => (
                <>
                    {children}
                </>
            )}
        </Formik>
    )
}
