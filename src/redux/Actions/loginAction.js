import { loginConstantes } from '../Constants/loginConstants';
import {loginService} from '../services/loginService';
import { alertActions } from './alertAction';
import { history } from '../Helpers/history';

export const userActions = {
    login,
    logout
};

function login(username, password, from) {
    return dispatch => {
        dispatch(request({ username }));

        loginService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push(from);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: loginConstantes.LOGIN_REQUEST, user } }
    function success(user) { return { type: loginConstantes.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: loginConstantes.LOGIN_FAILURE, error } }
}

function logout() {
    loginService.logout();
    return { type: loginConstantes.LOGOUT };
}