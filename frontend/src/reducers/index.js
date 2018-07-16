import { combineReducers } from 'redux';
import lists from "./lists";
import tasks from "./tasks"


const todoApp = combineReducers({
  lists, tasks,
})

export default todoApp;