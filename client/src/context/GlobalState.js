import { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const init = {
    index: 0,
    songs: [],
    isLoading: false,
    isError: null,
    getSongs: (query) => {},
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, init);

    const getSongs = async (query) => {
        dispatch({
            type: "LOADING",
        });
        try {
            const songsList = await (
                await fetch(`https://itunes.apple.com/search?term=${query}`)
            ).json();

            console.log(songsList);
        } catch (err) {
            console.log(err);
            dispatch({
                type: "ERROR",
                payload: err.message,
            });
        }
    };

    return (
        <GlobalContext.Provider
            value={{
                index: state.index,
                isLoading: state.isError,
                isError: state.isError,
                songs: state.songs,
                getSongs,
                dispatch,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
