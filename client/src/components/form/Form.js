import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalState";
import useDebounce from "../../hooks/useDebounce";

import { letters } from "../../utils/data";

const Form = () => {
    const { index, dispatch, isLoading, isError, getSongs, songs } =
        useContext(GlobalContext);
    const [query, setQuery] = useState("");

    const debounced = useDebounce(query, 1000);

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({
                type: "UP_INDEX",
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, [index]);

    useEffect(() => {
        if (debounced) {
            getSongs(debounced);
        }

        console.log(songs);
    }, [debounced]);

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
                    {letters.map((letter, i) => (
                        <li key={i}>{letters[(index + i) % letters.length]}</li>
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
                padding: 5px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                color: #fff;
                font-weight: 900;
                box-shadow: inset 1px 3px 3px rgba(0, 0, 0, 0.3);
            }
        }
    }
`;

export default Form;
