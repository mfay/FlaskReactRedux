export default function reducer(state={
        fetching: false,
        fetched: false,
        users: [],
        error: null,
        selectedUser: null
    }, action) {
    switch (action.type) {
        case 'FETCH_USER_PENDING': {
            return {...state, fetching: true};
        }
        case 'FETCH_USER_FULFILLED': {
            return {...state, users: action.payload.data, fetching: false, fetched: true};
        }
        case 'FETCH_USER_REJECTED': {
            return {...state, fetching: false, fetched: false, error: action.payload};
        }
        case 'SELECT_USER': {
            var selectedUser = state.users.filter(u => u.employeeNumber == action.payload).pop()
            return {...state, fetching: true, selectedUser: selectedUser};
        }
    }
    return state;
};
