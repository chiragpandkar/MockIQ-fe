import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user.slice";


const rootReducer = combineReducers({
    user: userReducer,
})

export default rootReducer;