const initialState = [];

export default function tasks(state = initialState, action) {
    let taskList = state.slice();
    if (action.id) {
        var taskToUpdate = taskList.find(t => t.id === action.id)
        var index = taskList.findIndex(t => t.id === action.id)
    }

    switch (action.type) {
        case 'FETCH_TASKS':
            return [...state, ...action.tasks];

        case 'ADD_TASK':
            return [...state, { text: action.text }];

        case 'UPDATE_TASK':
            //let taskToUpdate = taskList[action.index]
            taskToUpdate.text = action.text;
            taskList.splice(index, 1, taskToUpdate);
            return taskList;

        case 'DELETE_TASK':
            //let index = taskList.findIndex(t => t.id===action.id)
            taskList.splice(index, 1);
            return taskList;

        case 'CHECK_TASK':
            console.log('enter reducer CHECK_TASK');
            //taskToUpdate.is_completed = taskToUpdate.is_completed;
            taskList.splice(index, 1, taskToUpdate);
            return taskList;

        default:
            return state;
    }
}