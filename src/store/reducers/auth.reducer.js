import { SIGN_UP, SIGN_UP_START, SIGN_UP_FAILED } from "../actions/auth.action";
//AGREGAR LOGIN, y luego abajo lo relacionado a eso
const initialState ={
    token: null,
    userId: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_START:
            return {
                ...state,
                isLoading: true
            }
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId:action.userId,
                isLoading: false
            }
        case SIGN_UP_FAILED:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default AuthReducer;