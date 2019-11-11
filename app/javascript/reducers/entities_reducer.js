import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import assetsReducer from "./assets_reducer"
import walletsReducer from './wallets_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    assets: assetsReducer,
    wallets: walletsReducer
});

export default entitiesReducer;