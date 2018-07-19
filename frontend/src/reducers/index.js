import { combineReducers } from 'redux';
import lists from "./lists";
import tasks from "./tasks";
import auth from "./auth";


const todoApp = combineReducers({
  lists, tasks, auth
})

export default todoApp;