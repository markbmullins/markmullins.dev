import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import Home from "../Home/Home";
import styled from "styled-components";

const Navbar = styled.nav`
    position: absolute;
    top: 0;

    ${"" /* background-color: #212121; */}
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
    z-index: 100;
    height: 90px;
    width: 100%;
`;

const NavItem = styled.div`
    color: #ffffff;
    margin: 15px 15px;
    font-size: calc(0.8em + 1vw);
`;
function App() {
    return (
        <StylesProvider injectFirst>
            <Router>
                <Switch>
                    <Route path="/about"></Route>
                    <Route path="/projects"></Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    );
}

export default App;
