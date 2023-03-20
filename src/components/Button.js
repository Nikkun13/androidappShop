import { Pressable, Text } from "react-native";

import React from "react";
import { styles } from "../../styles";

const Button = ({ styleButtonType, onPress, title, disabled }) => {
  return (
    <>
      {disabled ? (
        <Pressable
          style={[styles.button, styles.buttonDesactivado]}
          onPress={onPress}
          disabled={disabled}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
      ) : (
        <Pressable
          style={[styles.button, styleButtonType]}
          onPress={onPress}
          disabled={disabled}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
      )}
    </>
  );
};

export default Button;
