import { letters } from "../utils/data";

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
        case "ADD_SONGS":
            return {
                ...state,
                songs: [...state.songs, ...action.payload],
            };
        case "RESET_SONGS":
            return {
                ...state,
                songs: [...letters],
            };

        default:
            return state;
    }
};

export default AppReducer;
