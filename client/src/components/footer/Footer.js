import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <span>nikola chakarov</span> &copy; 2022
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-top: 1px groove #fff;
    margin-top: auto;
    color: var(--color-gray);

    span {
        font-weight: 700;
    }
`;

export default Footer;
