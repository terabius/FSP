import { combineReducers } from "redux";
import entities from "./entities_reducer";
import errors from "./errors_reducer"
import session from "./session_reducer";
import users from "./users_reducer";

import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
// import ui from "./ui_reducer";

const appReducer = (state, action) => {
    if (action.type === LOGOUT_CURRENT_USER) {
        state = undefined;
    }

    return rootReducer(state, action)
}

const rootReducer = combineReducers({
    entities,
    errors,
    session,
    users
    //     ui,
});

export default appReducer




