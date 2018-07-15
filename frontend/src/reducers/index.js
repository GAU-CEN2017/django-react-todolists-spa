import { combineReducers } from 'redux';
import lists from "./lists";


const todoApp = combineReducers({
  lists,
})

export default todoApp;