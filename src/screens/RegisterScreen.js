import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../store/actions/auth.action";
import Input from "../components/Inputs";
import { styles } from "../../styles";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const inputValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const inputValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let formIsValid = true;
    for (const key in inputValidities) {
      formIsValid = formIsValid && inputValidities[key];
    }
    return {
      formIsValid,
      inputValidities,
      inputValues,
    };
  }
  return state;
};

const RegisterScreen = ({ navigation }) => {
  const dispacth = useDispatch();
  const isAuthLoading = useSelector((state) => state.auth.isLoading);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const onHandlerRegister = () => {
    if (formState.formIsValid) {
      dispacth(
        signUp(formState.inputValues.email, formState.inputValues.password)
      );
    } else {
      alert("Por favor, ingrese un email y una contraseña válidos");
    }
  };

  const handleChangedText = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView style={styles.screenRyL} behavior="padding">
      <View style={styles.containerRyL}>
        <Text style={styles.titleRyL}>Registro</Text>
        <View style={styles.formRyL}>
          <Input
            initialValue={formState.inputValues.email}
            initiallyValid={formState.inputValidities.email}
            onInputChange={handleChangedText}
            id="email"
            required={true}
            email
            minLength={5}
            label="Email"
            errorText="Por favor, introduzca un Email válido"
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Input
            initialValue={formState.inputValues.password}
            initiallyValid={formState.inputValidities.password}
            onInputChange={handleChangedText}
            id="password"
            required={true}
            minLength={5}
            label="Password"
            errorText="Por favor, introduzca una Password válido"
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.ButtonRyL}
            onPress={onHandlerRegister}
          >
            <Text style={styles.ButtonTextRyL}>
              {isAuthLoading ? "Loading..." : "Registrarse"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.promptRyL}>
          <Text style={styles.promptMessageRyL}>¿Ya tienes una cuenta?</Text>
          <TouchableOpacity>
            <Text
              style={styles.promptButtonRyL}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Iniciar sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
