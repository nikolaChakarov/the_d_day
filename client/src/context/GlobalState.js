import { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const init = {
    index: 0,
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, init);

    return (
        <GlobalContext.Provider value={{ index: state.index, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};
