import { combineReducers } from "redux";
import authReducer from "./authenReducer";

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;