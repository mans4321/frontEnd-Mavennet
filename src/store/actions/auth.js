import * as actionTypes from './actionTypes';
import * as authType from './authType';
import axios from '../../axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token) => {
    localStorage.setItem('token', token);
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};


export const logout = () => {
    localStorage.removeItem('token');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const authCheckState = () =>{
    return dispatch => {
        const token = localStorage.getItem('token');
        if(token){
            dispatch(authSuccess(token));
        }else{
            dispatch(logout());
        }
    }
}

export const auth = (method, payload) => {
    console.log(method)
    return dispatch => {
        dispatch(authStart());
        switch(method){
            case authType.LOGIN: return usernamePasswordLogin(dispatch, payload);
            case authType.SIGNUP: return usernamePasswordSignUp(dispatch, payload);
            default:return;
        }
    };
};

const usernamePasswordLogin = (dispatch, payload)=>{
    dispatch(authStart())
    axios.get('/users/login', {
        email: payload.email,
        password: payload.password
    }).then( res => {
        if(res.status !== 200)
            return dispatch(authFail({message: "Invalid username or password. Please try again:"}))
        dispatch(authSuccess(res.data.token))
    }).catch(e => dispatch(authFail(e)))
}

const usernamePasswordSignUp = (dispatch, payload)=>{
    dispatch(authStart())
    axios.post('/users', {
        name: payload.name,
        email: payload.email,
        password: payload.password
    }).then( res => {
        if(res.status !== 201)
            return dispatch(authFail({message: res.data.errmsg}))
        dispatch(authSuccess(res.data.token))
    }).catch(e => dispatch(authFail(e)))
}


