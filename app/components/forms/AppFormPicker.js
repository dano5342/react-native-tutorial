import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet } from 'react-native'
import colors from '../../config/colors';
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";


function AppFormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        style={styles.text}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;

const styles = StyleSheet.create({
  text: {
    placeholderColor: colors.medium
  }
})