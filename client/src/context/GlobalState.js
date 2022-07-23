import { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
import sortAndExtract from "../utils/sortAndExtract";

const init = {
    index: 0,
    songs: ["A", "B", "C", "D", "E"],
    isLoading: false,
    isError: null,
    getSongs: (query) => {},
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, init);

    const getSongs = async (query) => {
        const URL = `http://localhost:5005/api/users/test`;

        dispatch({
            type: "LOADING",
        });

        try {
            const dbRes = await (
                await fetch(URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ query }),
                })
            ).json();

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
