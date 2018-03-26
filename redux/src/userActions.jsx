import axios from 'axios';

export function fetchUsers() {
    return {
        type: 'FETCH_USER',
        payload: axios.get('/api/users')
    }
}

export function saveUser(user) {
    return {
        type: 'SAVE_USER',
        payload: axios.post('/api/users', user)
    }
}

export function selectUser(id) {
    return {
        type: 'SELECT_USER',
        payload: id
    }
}

export function editUser(id) {
    return {
        type: 'EDIT_USER',
        payload: id
    }
}

export function cancelEditUser() {
    return {
        type: 'CANCEL_EDIT_USER'
    }
}

export function addUser() {
    return {
        type: 'ADD_USER'
    }
}