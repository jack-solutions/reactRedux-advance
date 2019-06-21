import { REHYDRATE } from 'redux-persist';

var initState = {

    logindata: {},

};

function loginreducer(state = initState, action) {


    switch (action.type) {

        case 'Login':
            return {
                ...state,
                logindata: action.res
            };
        case 'Logout':
            return {
                ...state,
                logindata: action.res
            };
            case 'EditProfileData':
            return {
                ...state,
                logindata: action.res
            };

        case REHYDRATE:
            return {
                ...state,
                logindata: action.payload &&
                    action.payload.logindata ? action.payload.logindata : {}
            };
        default:
            return {
                ...state
            }
    }


}

export const reducer = loginreducer;