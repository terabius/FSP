import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import {LOGOUT_CURRENT_USER} from '../actions/session_actions'

const walletsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, action.payload.wallets );
        // case LOGOUT_CURRENT_USER:
        //     return Object.assign({},oldState, {wallets:null} )
            
        default:
            return oldState;
    }
}

export default walletsReducer