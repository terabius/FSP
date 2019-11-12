import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'
import {ADD_COIN,REMOVE_COIN} from '../actions/wallets_actions'

const walletsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, action.payload.wallets );
            
        case ADD_COIN:
            return Object.assign({}, oldState, {[action.coin.name]:coin});
        case REMOVE_COIN:
            return Object.assign({}, oldState, { 
                wallets : [...state.wallets.filter(coin => coin.name !== action.coinId)]
            });
        // case LOGOUT_CURRENT_USER:
        //     return Object.assign({},oldState, {wallets:null} )
            
        default:
            return oldState;
    }
}

export default walletsReducer
