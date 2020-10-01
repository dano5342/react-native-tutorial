import { StyleSheet, Platform } from "react-native";

import colors from '../../config/colors' ;

const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      width: "100%",
      marginVertical: 10,
    },
    text: {
      color: colors.white,
      fontSize: 18,
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  });
  

export default styles;