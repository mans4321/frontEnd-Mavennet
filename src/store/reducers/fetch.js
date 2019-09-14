import * as actionTypes from '../actions/actionTypes';
import { updateObject} from '../../shared/utility';

const initialState = {
    data: [],
    loading: false,
    err: null,
};


const fetchStart = ( state ) => {
    return updateObject( state, { 
        loading: true,
        data: [],
        err: null,
    } );
};

const fetchSuccess = ( state, action ) => {
    return updateObject( state, {
        data: action.data,
        loading: false
    } );
};

const fetchFail = ( state, action ) => {
    return updateObject( state, { 
        loading: false,
        error: action.error
    } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_DATA_START: return fetchStart( state );
        case actionTypes.FETCH_DATA_SUCCESS: return fetchSuccess( state, action );
        case actionTypes.FETCH_DATA_FAIL: return fetchFail( state, action );
        default: return state;
    }
};

export default reducer;