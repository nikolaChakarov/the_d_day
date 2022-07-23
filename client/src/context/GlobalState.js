import { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
import sortAndExtract from "../utils/sortAndExtract";

const init = {
    // index we use to rotate the songs array with
    index: 0,
    // staring condition
    songs: ["A", "B", "C", "D", "E"],
    isLoading: false,
    isError: null,
    getSongs: (query) => {},
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, init);

    const getSongs = async (query) => {
        // we hit the server made by the author, because he couldn't take care of the cors error on the frontend part. sorry :(; so, please do run the server
        const URL = `http://localhost:5001/api/tunes?term=${query}`;

        dispatch({
            type: "LOADING",
        });

        try {
            const dbRes = await (await fetch(URL)).json();

            if (dbRes?.resultCount === 0) {
                throw "no no no, no such a thing!!!";
            }

            const list = sortAndExtract(dbRes.list);

            dispatch({
                type: "ADD_SONGS",
                payload: list,
            });
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
                isLoading: state.isLoading,
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
