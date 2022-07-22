import { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const init = {};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, init);

    return (
        <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
    );
};
