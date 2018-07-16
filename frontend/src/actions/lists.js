export const fetchLists = () => {
    return dispatch => {
        let headers = { "Content-Type": "application/json" };
        return fetch("/api/lists/", { headers, })
            .then(res => res.json())
            .then(lists => {
                return dispatch({
                    type: 'FETCH_LISTS',
                    lists
                })
            })
    }
}

export const addList = text => {
    return dispatch => {
        let headers = {"Content-Type": "application/json"};
        let body = JSON.stringify({text, });
        return fetch("/api/lists/", {headers, method: "POST", body})
          .then(res => res.json())
          .then(list => {
            return dispatch({
              type: 'ADD_LIST',
              list
            })
          })
      }
}

export const updateList = (id, list) => {
    return {
        type: 'UPDATE_LIST',
        id,
        list
    }
}

export const deleteList = id => {
    return {
        type: 'DELETE_LIST',
        id
    }
}