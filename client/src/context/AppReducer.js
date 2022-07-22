const AppReducer = (state, action) => {
    switch (action.type) {
        case "UP_INDEX":
            return {
                ...state,
                index: state.index + 1,
            };
        case "LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "END_LOADING":
            return {
                ...state,
                isLoading: false,
            };
        case "ERROR":
            return {
                ...state,
                isError: action.payload,
                isLoading: false,
            };
        case "CLEAR_ERROR":
            return {
                ...state,
                isError: null,
                isLoading: false,
            };
        case "GET_SONGS":
            return {
                ...state,
                songs: [...action.payload],
            };

        default:
            return state;
    }
};

export default AppReducer;
