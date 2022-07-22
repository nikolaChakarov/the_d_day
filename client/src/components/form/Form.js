import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalState";

import { letters } from "../../utils/data";

const Form = () => {
    const { index, dispatch } = useContext(GlobalContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({
                type: "UP_INDEX",
            });
        }, 1000);

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <FormContainer className="form-container">
            <div className="form-wrapper">
                <input
                    className="search-el"
                    name="search"
                    placeholder="Search Band"
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

const FormContainer = styled.div``;

export default Form;
