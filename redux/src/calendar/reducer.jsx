const defaultState = {
    events: [],
    year: (new Date()).getFullYear(),
    month: (new Date()).getMonth() + 1
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'FETCH_EVENTS_FULFILLED': {
            return { ...state, events: action.payload.data };
        }
    }

    return state;
}