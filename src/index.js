import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';


import App from './App';
import fetcheducer from './store/reducers/fetch';
import authReducer from './store/reducers/auth';

import * as serviceWorker from './serviceWorker';
import './index.css';


const rootReducer = combineReducers({
    search: fetcheducer,
    auth: authReducer
});

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
));


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App className="App" />
        </BrowserRouter>
    </Provider>
        
);

ReactDOM.render( app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();