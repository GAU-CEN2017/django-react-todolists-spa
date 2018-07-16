export const addTask = (text) => {
    return {
      type: 'ADD_TASK',
      text,
      //listId
    }
  }
  
  export const updateTask = (id, text) => {
    return {
      type: 'UPDATE_TASK',
      id,
      text
    }
  }
  
  export const deleteTask = id => {
    return {
      type: 'DELETE_TASK',
      id
    }
  }