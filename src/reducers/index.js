import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import userService from './userService'

export default combineReducers({
  auth,
  message,
  userService,
});