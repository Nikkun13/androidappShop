import { Text, View, TextInput } from "react-native";
import React, { useReducer, useEffect } from "react";
import { styles } from "../../styles";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const Input = ({
  initialValue,
  initiallyValid,
  onInputChange,
  id,
  required,
  email,
  min,
  max,
  minLength,
  label,
  errorText,
  ...restProps
}) => {
  const [inputState, inputDispatch] = useReducer(inputReducer, {
    value: initialValue ? initialValue : "",
    isValid: initiallyValid,
    touched: false,
  });

  //Al momento de llenar los campos de email o password, al finalizar se debe pasar a llenar otro campo o presionar enter, para que la siguiente
  //parte se actualice y mande los datos. Un error que me pasaba es que llenaba el campo de password (el segundo) y al hacer click en registrarme
  //me marcaba password perdida, me di cuenta el siguiente console.log no se escribía. Si presiono enter y luego en registrarme funciona.
  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
      console.log(inputState); //Este console.log es el que indico arriba (linea 37)
    }
  }, [inputState, onInputChange]);

  const textChangeHandler = (text) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (required && text.trim().length === 0) {
      isValid = false;
    }
    if (email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (min != null && +text < min) {
      isValid = false;
    }
    if (max != null && +text > max) {
      isValid = false;
    }
    if (minLength != null && text.length < minLength) {
      isValid = false;
    }
    inputDispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  const lostFocusHandler = () => {
    inputDispatch({ type: INPUT_BLUR });
  };

  return (
    <View style={styles.formControlInputs}>
      <Text style={styles.labelInputs}>{label}</Text>
      <TextInput
        {...restProps}
        style={styles.inputInputs}
        value={inputState.value}
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
      />
      {!inputState.isValid && inputState.touched && (
        <View style={styles.errorContainerInputs}>
          <Text style={styles.errorTextInputs}>{errorText}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
