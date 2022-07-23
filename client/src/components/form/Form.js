import React, { useContext, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalState";
import useDebounce from "../../hooks/useDebounce";

import CircularProgress from "@mui/material/CircularProgress";

const Form = () => {
    // from global state
    const { index, dispatch, isLoading, isError, getSongs, songs } =
        useContext(GlobalContext);

    // focus our search element when we hit the page;
    const searchEl = useRef(null);

    // our search query
    const [query, setQuery] = useState("");

    // by design we want to show no more then 5 elements on the screen
    const maxElOnScreen = 5;

    // ...protect ourself from people who type very fast; not like the author
    const debounced = useDebounce(query, 1000);

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };

    // rotate form elements; change index
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({
                type: "UP_INDEX",
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, [index, dispatch]);

    // handle debounced value; clear songs array
    useEffect(() => {
        dispatch({
            type: "RESET_SONGS",
        });

        if (debounced) {
            getSongs(debounced);
        }
    }, [debounced]);

    // re-render if songs array has changed and keep the weel turning :); focus the search bar;
    useEffect(() => {
        searchEl.current.focus();

        setTimeout(() => {
            dispatch({
                type: "END_LOADING",
            });
        }, 1000);
    }, [songs, dispatch]);

    return (
        <FormContainer className="form-container">
            <div className="form-wrapper">
                <div className="form-top">
                    {/* our search bar */}
                    <input
                        ref={searchEl}
                        className="search-el"
                        name="search"
                        placeholder="Search Band"
                        onChange={handleSearchChange}
                    ></input>
                    {/* loading component; the only one taken from a library... */}
                    {isLoading && (
                        <CircularProgress
                            size={20}
                            sx={{
                                color: "#42838a",
                            }}
                        />
                    )}
                </div>
                {/* render songssss */}
                <ul className="letters-wrapper">
                    {songs.map((letter, i) => (
                        <li
                            key={i}
                            className={i >= maxElOnScreen ? "hidden" : ""}
                        >
                            {/* we use i to show element; index from global state to iterate with, which is going to grow until the end of the days :), and remainder operator...to stay in the needed length  */}
                            {songs[(index + i) % songs.length]}
                        </li>
                    ))}
                </ul>
            </div>
        </FormContainer>
    );
};

const FormContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .form-wrapper {
        min-width: 600px;
        border: 1px solid var(--color-main);
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);

        .form-top {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 10px;
        }

        input {
            padding: 7px;
            border: 1px solid var(--color-main);
            border-radius: 5px;
            color: var(--color-gray);
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .letters-wrapper {
            display: flex;
            flex-direction: column;
            gap: 10px;

            li {
                background: var(--color-main);
                padding: 10px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                color: #fff;
                font-weight: 900;
                box-shadow: inset 1px 3px 3px rgba(0, 0, 0, 0.3);
                font-size: 14px;
            }
            // by design, we see only 5 items at once
            li.hidden {
                display: none;
            }
        }
    }
`;

export default Form;
