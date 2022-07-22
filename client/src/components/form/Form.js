import React from "react";
import styled from "styled-components";

const Form = () => {
    return (
        <FormContainer className="form-container">
            <div className="form-wrapper">
                <input
                    className="search-el"
                    name="search"
                    placeholder="Search Band"
                ></input>
            </div>
        </FormContainer>
    );
};

const FormContainer = styled.div``;

export default Form;
