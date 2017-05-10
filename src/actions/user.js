import * as constants from '../constants';

export const sendAuthRequest = (login, password) => {
    return {
        type: constants.SEND_AUTH_REQUEST,
        payload: {
            login,
            password
        }
    }
};

export const loadUserData = (data) => {
    return {
        type: constants.LOAD_USER_DATA,
        payload: data
    }
};

export const logOut = () => {
    return {
        type: constants.LOG_OUT
    }
};

export const loadUsers = (users) => {
    return {
        type: constants.LOAD_USERS,
        payload: {
            users
        }
    }
};

export const fetchUsers = (users) => {
    return {
        type: constants.FETCH_USERS,
        payload: users
    }
};