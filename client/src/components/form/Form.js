import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalState";
import useDebounce from "../../hooks/useDebounce";

const Form = () => {
    const { index, dispatch, isLoading, isError, getSongs, songs } =
        useContext(GlobalContext);
    const [query, setQuery] = useState("");

    const maxElOnScreen = 5;

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
    }, [index]);

    // handle debounced value; clear songs array
    useEffect(() => {
        dispatch({
            type: "RESET_SONGS",
        });

        if (debounced) {
            getSongs(debounced);
        }
    }, [debounced]);

    // re-render if songs array has changed
    useEffect(() => {}, [songs]);

    return (
        <FormContainer className="form-container">
            <div className="form-wrapper">
                <input
                    className="search-el"
                    name="search"
                    placeholder="Search Band"
                    onChange={handleSearchChange}
                ></input>

                <ul className="letters-wrapper">
                    {songs.map((letter, i) => (
                        <li
                            key={i}
                            className={i >= maxElOnScreen ? "hidden" : ""}
                        >
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

        input {
            padding: 7px;
            border: 1px solid var(--color-main);
            border-radius: 5px;
            color: var(--color-gray);
            margin-bottom: 10px;
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
