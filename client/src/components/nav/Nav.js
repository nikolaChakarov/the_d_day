import { Link } from "react-router-dom";
import styled from "styled-components";
import { menuLinks } from "../../utils/data";

const Nav = () => {
    return (
        <NavContainer className="nav-container">
            <div className="nav-wrapper">
                <div className="logo">D logo</div>
                <ul>
                    {menuLinks.map((el, i) => (
                        <li key={i}>
                            <Link to={`/${el === "home" ? "" : el}`}>{el}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </NavContainer>
    );
};

const NavContainer = styled.div`
    display: flex;
    background: var(--color-main);
    color: #fff;
    padding: 10px 20px;
    justify-content: center;

    .nav-wrapper {
        display: flex;
        flex: 1;
        max-width: 1024px;
        align-items: center;
    }

    .logo {
        flex: 1;
        font-weight: 900;
    }

    ul {
        display: flex;
        gap: 10px;

        a {
            color: #fff;
            text-transform: capitalize;
            font-size: 14px;
        }
    }
`;

export default Nav;
