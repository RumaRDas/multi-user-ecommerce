import { authReducer } from "./Reducers/authReducer";
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({ auth: authReducer });

export default rootReducer;
