import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducer/index';
import {createLogger } from 'redux-logger';

// import reduxImmutableStateInvariant from 'reduxImmutableStateInvariant';
export default function ConfigureStore(initialState){
    return createStore(
        rootReducer,
        applyMiddleware(createLogger()),
        initialState)  
    ;
} 