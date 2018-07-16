const initialState = [];


export default function lists(state = initialState, action) {
  let allLists = state.slice();

  switch (action.type) {

    case 'FETCH_LISTS':
      return [...state, ...action.lists];

    case 'ADD_LIST':
      return [...state, action.list];

    case 'UPDATE_LIST':
      let listToUpdate = allLists[action.id]
      listToUpdate.text = action.text;
      allLists.splice(action.id, 1, listToUpdate);
      return allLists;

    case 'DELETE_LIST':
      allLists.splice(action.id, 1);
      return allLists;

    default:
      return state;
  }
}