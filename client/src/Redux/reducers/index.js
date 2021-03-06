/* this file is used to combine all of our reducers */

import { combineReducers } from "redux";
import authReducers from "./authReducer";
import errorReducers from "./errorReducer";
import accountReducer from "./accountReducer";


export default combineReducers({
    auth: authReducers,
    errors: errorReducers,
    plaid: accountReducer,
    
})