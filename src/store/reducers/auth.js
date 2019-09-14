import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    token: null,
    authError: null,
    loading: false
};

const authStart = ( state, action ) => {
    return updateObject( state, { authError: null, loading: true , token: null} );
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.token,
        authError: null,
        loading: false,
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        authError: action.error,
        loading: false
    });
};


const authLogout = (state, action) => {
    return updateObject(state, {token: null});
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }
};

export default reducer;