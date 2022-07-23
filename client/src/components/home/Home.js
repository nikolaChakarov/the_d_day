import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
    return (
        <HomeContainer>
            <h1>
                Find you best <span>5</span> iTunes
            </h1>
            <Link to={"/form"}>...in the next page</Link>
        </HomeContainer>
    );
};

const HomeContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;

    h1 {
        color: var(--color-main);
        font-weight: 900;
    }

    a {
        color: var(--color-gray);
    }
`;

export default Home;
