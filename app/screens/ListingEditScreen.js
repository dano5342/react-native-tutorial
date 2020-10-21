import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import { 
    AppForm, 
    AppFormField, 
    SubmitButton, 
    AppFormPicker
} from '../components/forms';
import Screen from '../components/Screen';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    category: Yup.object().required().nullable().label('Category'),
    description: Yup.string().label('Description'),
});

const categories = [
    {label: 'Furniture', value: 1},
    {label: 'Cars', value: 2},
    {label: 'Cameras', value: 3},
    {label: 'Games', value: 4},
    {label: 'Clothing', value: 5},
    {label: 'Sports', value: 6},
    {label: 'Movies', value: 7},
    {label: 'Books', value: 8},
    {label: 'Other', value: 9},
    
]

export default function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '', 
                    price: '', 
                    category: null,
                    description: '',    
                }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title"/>
                <View style={styles.price}>
                    <AppFormField
                        keyboardType="numeric"
                        maxLength={8}
                        name="price"
                        placeholder="Price"
                    />
                </View>
                <View style={styles.category}>
                    <AppFormPicker
                        items={categories}
                        name="category"
                        placeholder="Category"
                    />
                </View>
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post"/>
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    price: {
        width: "25%"
    },
    category: {
        width: "50%"
    }
})