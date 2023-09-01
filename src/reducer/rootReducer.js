import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./authentication/reducers";

const rootReducer= combineReducers({
    auth:AuthReducer
});

export default rootReducer;