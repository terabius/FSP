import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import {LOGOUT_CURRENT_USER} from '../actions/session_actions'


const assetsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, action.payload.assets );
        // case LOGOUT_CURRENT_USER:
        //     return Object.assign({},oldState, {assets:null} )
        default:
            return oldState;
    }
}

export default assetsReducer