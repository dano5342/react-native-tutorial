import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet } from 'react-native'
import colors from '../../config/colors';
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
import { number } from "yup";
import PickerItem from "../PickerItem";


function AppFormPicker({ 
  items, 
  name, 
  placeholder,
  PickerItemComponent,
  numberOfColumns,
  width
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;

const styles = StyleSheet.create({
})