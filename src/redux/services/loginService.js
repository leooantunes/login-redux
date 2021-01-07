import api from '../../api';

export const loginService = {
    login,
    logout
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    api.post('users/authenticate', requestOptions).then(response => {
        if(response.status === 200){
            return response.data;
        }else{
            logout();
        }
    }).then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}