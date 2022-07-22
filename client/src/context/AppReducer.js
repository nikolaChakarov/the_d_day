const AppReducer = (state, action) => {
    switch (action.type) {
        case "UP_INDEX":
            return {
                ...state,
                index: state.index + 1,
            };

        default:
            return state;
    }
};

export default AppReducer;
