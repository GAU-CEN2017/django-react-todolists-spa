export const addList = text => {
    return {
      type: 'ADD_LIST',
      text
    }
  }
  
  export const updateList = (id, text) => {
    return {
      type: 'UPDATE_LIST',
      id,
      text
    }
  }
  
  export const deleteList = id => {
    return {
      type: 'DELETE_LIST',
      id
    }
  }