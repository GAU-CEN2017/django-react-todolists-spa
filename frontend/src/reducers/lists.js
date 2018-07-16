const initialState = [];


export default function lists(state = initialState, action) {
  let allLists = state.slice();

  switch (action.type) {

    case 'FETCH_LISTS':
      return [...state, ...action.lists];

    case 'ADD_LIST':
      return [...state, action.list];

    case 'UPDATE_LIST':
      let listToUpdate = allLists[action.index]
      listToUpdate.text = action.list.text;
      allLists.splice(action.index, 1, listToUpdate);
      return allLists;

    case 'DELETE_LIST':
      allLists.splice(action.index, 1);
      return allLists;

    default:
      return state;
  }
}