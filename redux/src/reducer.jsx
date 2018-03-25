export default function reducer(state={
        fetching: false,
        fetched: false,
        users: [],
        error: null,
        isEditing: false,
        selectedUser: null
    }, action) {
    switch (action.type) {
        case 'FETCH_USER_PENDING': {
            return {...state, fetching: true, isEditing: false};
        }
        case 'FETCH_USER_FULFILLED': {
            return {...state, users: action.payload.data, fetching: false, fetched: true, isEditing: false};
        }
        case 'FETCH_USER_REJECTED': {
            return {...state, fetching: false, fetched: false, error: action.payload, isEditing: false};
        }
        case 'SELECT_USER': {
            var selectedUser = state.users.filter(u => u.employeeNumber == action.payload).pop()
            return {...state, fetching: true, selectedUser: selectedUser, isEditing: false};
        }
        case 'EDIT_USER': {
            return {...state, isEditing: true};
        }
        case 'CANCEL_EDIT_USER': {
            return {...state, isEditing: false, selectedUser: null};
        }
        case 'SAVE_USER_PENDING': {
            return {...state, isEditing: false, selectedUser: null};
        }
        case 'SAVE_USER_REJECTED': {
            return {...state, isEditing: false};
        }
        case 'SAVE_USER_FULFILLED': {
            return {...state, isEditing: false, selectedUser: null, users: action.payload.data};
        }
        case 'ADD_USER': {
            const user = {
                firstName: '',
                lastName: '',
                employeeNumber: ''
            };
            return {...state, isEditing: true, selectedUser: user};
        }
    }
    return state;
};
