import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';


export default function configureStore(initialState= {}){
    const store = createStore(rootReducer,
        initialState,
        applyMiddleware(thunk));
    return store;
}

