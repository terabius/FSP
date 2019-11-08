import { combineReducers } from "redux";
// import entities from "./entities_reducer";
// import ui from "./ui_reducer";
// import errors from "./errors_reducer"
import session from "./session_reducer";


const rootReducer = combineReducers({
//     entities,
//     ui,
//     errors,
    session
});


// function rootReducer(state, action) {
//     console.log(action.type);
//     switch (action.type) {
//         default:
//             return state;
//     }
// }

export default rootReducer




