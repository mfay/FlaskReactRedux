import axios from 'axios';

export function fetchUsers() {
    return {
        type: 'FETCH_USER',
        payload: axios.get('/users')
    }
}

export function saveUser(user) {
    return {
        type: 'SAVE_USER',
        payload: axios.post('/users', user)
    }
}

export function selectUser(id) {
    return {
        type: 'SELECT_USER',
        payload: id
    }
}

export function editUser() {
    return {
        type: 'EDIT_USER'
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