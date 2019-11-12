import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers/root_reducer';


export default function configureStore(initialState= {}){
    const store = createStore(appReducer,
        initialState,
        applyMiddleware(thunk));
    return store;
}

