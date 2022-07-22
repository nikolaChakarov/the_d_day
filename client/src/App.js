import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <AppContainer className="app-container">
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<Form />} />
            </Routes>
            <Footer />
        </AppContainer>
    );
};

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export default App;
