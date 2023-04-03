import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useCallback, useReducer } from 'react'
import { Colors } from '../constants/colors'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../store/actions/auth.action'
import Input from '../components/input'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state,action) => {
    if(action.type === FORM_INPUT_UPDATE){
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }
        let formIsValid = true;
        for (const key in inputValidities){
            formIsValid = formIsValid && inputValidities[key];
        }
        return {
            formIsValid,
            inputValidities,
            inputValues
        }
    }
    return state;
}


const LoginScreen = ({ navigation }) => {

    const dispacth =useDispatch();
    const isAuthLoading = useSelector(state => state.auth.isLoading);

    const [formState, dispatchFormState] = useReducer(formReducer,{
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false    
    });

    const onHandlerRegister = () => {
        if(!formState.formIsValid){
        dispacth(signIn(email,password))
        } else {
            alert('Por favor, ingrese un email y una contraseña válidos')
        }
    }

    const handleChangedText = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        })
    },[dispatchFormState])

    return (
        <KeyboardAvoidingView style={styles.screen} behavior='padding'>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.form}>
                    <Input
                    initialValue={formState.inputValues.email}
                    initiallyValid={formState.inputValidities.email}
                    onInputChange={handleChangedText}
                    id='id'
                    required={true}
                    email
                    minLength={5}
                    label='Email'
                    errorText='Por favor, introduzca un Email válido'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    />
                    <Input
                    initialValue={formState.inputValues.password}
                    initiallyValid={formState.inputValidities.password}
                    onInputChange={handleChangedText}
                    id='password'
                    required={true}
                    password
                    minLength={5}
                    label='Password'
                    errorText='Por favor, introduzca una Password válido'
                    secureTextEntry
                    />
                    <TouchableOpacity style={styles.loginButton} onPress={onHandlerRegister}>
                        <Text style={styles.loginButtonText}>{isAuthLoading ? 'Loading...' : 'Entrar'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.prompt}>
                    <Text style={styles.promptMessage}>
                        ¿No tienes una cuenta?
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.promptButton} onPress={() => {
        navigation.navigate('Register')}}>Registrarse</Text> 
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        //fontFamily: 'OpenSans_700Bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    label: {
        fontSize: 16,
        //fontFamily: 'OpenSans_700Bold'
    },
    textInput: {
        width: '100%',
        height: 40,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 12,
    },
    loginButton: {
        width: '100%',
        justifyContent: 'center',
        height: 40,
        backgroundColor: Colors.primary,
        marginVertical: 12,
    },
    loginButtonText: {
        fontSize: 18,
        //fontFamily: 'OpenSans_700Bold',
        textAlign: 'center',
        color: '#fff',
    },
    prompt: {
        alignItems: 'center',
    },
    promptMessage: {
        fontSize: 16,
        //fontFamily: 'OpenSans_400Regular',
        color: '#333',
    },
    promptButton: {
        fontSize: 16,
        //fontFamily: 'OpenSans_700Bold',
        color: Colors.primary
    },
    button: {
        backgroundColor: Colors.primary,
        marginVertical: 20,
    }
})