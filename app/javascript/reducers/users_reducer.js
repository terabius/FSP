import {RECEIVE_CURRENT_USER} from '../actions/session_actions'
// import {LOGOUT_CURRENT_USER} from '../actions/session_actions'

// 
const usersReducer = (oldState ={}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({},oldState,{[action.currentUser.id]:action.currentUser});

        // case LOGOUT_CURRENT_USER:
            // return Object.assign({},oldState, {user:null} )
        default:
            return oldState;
    }
}

export default usersReducer