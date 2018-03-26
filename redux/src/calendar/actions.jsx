import axios from 'axios';

export function fetchEvents(month, year) {
    return {
        type: 'FETCH_EVENTS',
        payload: axios.post('/api/events', {month: month, year: year})
    }
}