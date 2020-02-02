import React from "react";
import styled from "styled-components";

const Grid = styled.div`
    background-color: ${props => (props.bg ? "white" : "transparent")};
    height: 100vh;
    width 100vw;
    max-height: 100vh;
    max-width 100vw;   
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-rows: 100px auto;

    @media screen and (max-width: 500px) {
       grid-template-columns: 1fr 6fr 1fr;
    }
`;

const Navbar = styled.nav`
    background-color: ${props => (props.bg ? "red" : "transparent")};
    grid-column: 1 / span 3;

    ${props => props.styles}
`;

const Subgrid = styled.section`
    background-color: ${props => (props.bg ? "blue" : "transparent")};

    grid-row: 2/2;

    display: grid;
    grid-template-rows: auto auto auto;

    ${props => props.styles}

    @media screen and (max-width: 500px) {
        grid-gap: 1em;
        padding: 4em 1em;
    }
`;

const SideNav = styled.div`
    background-color: ${props => (props.bg ? "yellow" : "transparent")};
    grid-row: 2/2;
`;

const SubgridRow = styled.div`
    background-color: ${props => (props.bg ? "pink" : "transparent")};
`;

const LayoutOne = props => {
    const {
        backgroundColors,
        navbar: navbarChildren,
        sideNavLeft,
        sideNavRight,
        subGridChildren,
        styles = {}
    } = props;
    return (
        <Grid id="layout" styles={styles.Grid} bg={backgroundColors}>
            <Navbar styles={styles.Navbar} bg={backgroundColors}>
                {navbarChildren}
            </Navbar>
            <SideNav styles={styles.SideNavLeft} bg={backgroundColors}>
                {sideNavLeft}
            </SideNav>
            <Subgrid styles={styles.Subgrid} bg={backgroundColors}>
                {subGridChildren.map(child => (
                    <SubgridRow styles={styles.SubgridRow} bg={backgroundColors}>
                        {child}
                    </SubgridRow>
                ))}
            </Subgrid>
            <SideNav styles={styles.SideNavRight} bg={backgroundColors}>
                {sideNavRight}
            </SideNav>
        </Grid>
    );
};

export default LayoutOne;
