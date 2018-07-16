const initialState =[];

export default function tasks(state=initialState, action) {
    let taskList = state.slice();
  
    switch (action.type) {
  
      case 'ADD_TASK':
        return [...state, {text: action.text}];
  
      case 'UPDATE_TASK':
        let taskToUpdate = taskList[action.id]
        taskToUpdate.text = action.text;
        taskList.splice(action.id, 1, taskToUpdate);
        return taskList;
  
      case 'DELETE_TASK':
        taskList.splice(action.id, 1);
        return taskList;
  
      default:
        return state;
    }
  }