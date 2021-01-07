import { loginConstantes } from '../Constants/loginConstants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case loginConstantes.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case loginConstantes.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case loginConstantes.LOGIN_FAILURE:
            return {};
        case loginConstantes.LOGOUT:
            return {};
        default:
            return state
    }
}