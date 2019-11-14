import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'
import {ADD_COIN,REMOVE_COIN} from '../actions/wallets_actions'

const walletsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    Object.filter = (obj, predicate) =>
        Object.keys(obj)
            .filter(key => predicate(obj[key]))
            .reduce((res, key) => (res[key] = obj[key], res), {});

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, action.payload.wallets );
            
        case ADD_COIN:
            return Object.assign({}, oldState, action.coin);
            
        case REMOVE_COIN:
           
            const newState = Object.assign({}, 
                Object.filter( oldState, coin => coin.name !== action.coinSym)
                );
    
            return newState

        // case LOGOUT_CURRENT_USER:
        //     return Object.assign({},oldState, {wallets:null} )
            
        default:
            return oldState;
    }
}

export default walletsReducer


