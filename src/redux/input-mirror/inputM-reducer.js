const initialState = {
    inputValue: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                inputValue: action.text
            };
        default:
            return state
    }
};

