export const fetchTasks = () => {
    return dispatch => {
        let headers = { "Content-Type": "application/json" };
        return fetch("/api/tasks/", { headers, })
            .then(res => res.json())
            .then(tasks => {
                return dispatch({
                    type: 'FETCH_TASKS',
                    tasks
                })
            })
    }
}


export const addTask = (text, todolist) => {
    return dispatch => {
        let headers = {"Content-Type": "application/json"};
        let body = JSON.stringify({text, todolist});
        return fetch("/api/tasks/", {headers, method: "POST", body})
          .then(res => res.json())
          .then(task => {
            return dispatch({
                type: 'ADD_TASK',
                task,
            })
          })
      }
}

export const updateTask = (id, text, todolist) => {
    return (dispatch, getState) => {
        
        console.log('enter updateTask');
        console.log('id: '+id);
        //console.log('taskId (by index): '+getState().tasks[id].id)
        
        let headers = {"Content-Type": "application/json"};
        let body = JSON.stringify({text, todolist });
        //let taskId = getState().tasks[index].id;
    
        return fetch(`/api/tasks/${id}/`, {headers, method: "PUT", body})
          .then(res => res.json())
          .then(task => {
            return dispatch({
              type: 'UPDATE_TASK',
              task,
              id,
              todolist
            })
          })
      }
}

export const deleteTask = id => {
    return (dispatch, getState) => {

        let headers = {"Content-Type": "application/json"};
    
        return fetch(`/api/tasks/${id}/`, {headers, method: "DELETE"})
          .then(res => {
            if (res.ok) {
              return dispatch({
                type: 'DELETE_TASK',
                id
              })
            }
          })
      }
}