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
        let headers = { "Content-Type": "application/json" };
        let body = JSON.stringify({ text, });
        return fetch("/api/lists/", { headers, method: "POST", body })
            .then(res => res.json())
            .then(list => {
                return dispatch({
                    type: 'ADD_LIST',
                    list
                })
            })
    }
}

export const updateList = (index, text) => {
    return (dispatch, getState) => {

        let headers = { "Content-Type": "application/json" };
        let body = JSON.stringify({ text, });
        let listId = getState().lists[index].id;

        return fetch(`/api/lists/${listId}/`, { headers, method: "PUT", body })
            .then(res => res.json())
            .then(list => {
                return dispatch({
                    type: 'UPDATE_LIST',
                    list,
                    index,
                })
            })
    }
}

export const deleteList = id => {
    return (dispatch, getState) => {

        let headers = { "Content-Type": "application/json" };
        //let listId = getState().lists[index].id;

        return fetch(`/api/lists/${id}/`, { headers, method: "DELETE" })
            .then(res => {
                if (res.ok) {
                    return dispatch({
                        type: 'DELETE_LIST',
                        id,
                    })

                }
            })
    }

}