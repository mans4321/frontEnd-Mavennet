import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchStart = () => {
    return {
        type: actionTypes.FETCH_DATA_START
    };
};

export const fetchSuccess = ( data ) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        data: data
    };
};

export const fetchFail = ( error ) => {
    return {
        type: actionTypes.FETCH_DATA_FAIL,
        error: error
    };
};



export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchStart());
        axios.get( '/users')
            .then( res => {
                dispatch(fetchSuccess(res.data));
            } )
            .catch( err => {
                dispatch(fetchFail(err));
            } );
    };
};

export const fetchAlbums = () => {
    return dispatch => {
        dispatch(fetchStart());
        axios.get( '/albums')
            .then( res => {
                dispatch(fetchSuccess(res.data));
            } )
            .catch( err => {
                dispatch(fetchFail(err));
            } );
    };
};

export const fetchPhotos = () => {
    return dispatch => {
        dispatch(fetchStart());
        axios.get( '/photos')
            .then( res => {
                dispatch(fetchSuccess(res.data));
            } )
            .catch( err => {
                dispatch(fetchFail(err));
            } );
    };
};