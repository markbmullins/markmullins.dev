import React, { useState, useEffect, useCallback, Fragment } from "react";
import styled from "styled-components";
import LayoutOne from "../Layouts/LayoutOne";
import { SocialIcon } from "react-social-icons";
import Slider from "@material-ui/core/Slider";
import Image from "../Image/Image";

const files = [
    "sun.png",
    "sunset5.png",
    "plane.png",
    "triangles.jpg",
    "sunset.jpg",
    "sun2.jpg",
    "sun3.jpg"
];

const backgrounds = files.map(file => `${process.env.PUBLIC_URL}/backgrounds/${file}`);

const StyledSlider = styled(Slider)`
    margin-top: 10%;
    color: #ffffff;
    & .PrivateValueLabel-label-25 {
        color: #000000;
    }
`;

const SocialIconContainer = styled.li`
    margin: auto;
`;

const Name = styled.h1`
    color: #ffffff;
    font-family: "Monoton", cursive;
    text-align: center;
    font-size: calc(1em + 6vw);
`;

const IconList = styled.ul`
    list-style: none;
    display: flex;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
`;

const SideNavContainer = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    display: inline-block;
`;

const BackgroundChanger = styled.div`
    color: white;
    font-size: 40px;
    cursor: pointer;
`;

const NextBackground = styled(BackgroundChanger)`
    margin-left: auto;
`;

const PreviousBackground = styled(BackgroundChanger)``;

const Navbar = styled.div``;

const Home = () => {
    const [backgroundNumber, setBackgroundNumber] = useState(0);
    const [changeInterval, setChangeInterval] = useState(5);
    const FORWARD = "FORWARD";
    const BACKWARD = "BACKWARD";

    const changeBackground = useCallback(
        direction => {
            switch (direction) {
                case FORWARD:
                    backgroundNumber === files.length - 1
                        ? setBackgroundNumber(0)
                        : setBackgroundNumber(backgroundNumber + 1);
                    break;
                case BACKWARD:
                    backgroundNumber === 0
                        ? setBackgroundNumber(files.length - 1)
                        : setBackgroundNumber(backgroundNumber - 1);
                    break;
                default:
            }
            const el = document.documentElement;
            if (el) {
                el.style.background = `url(${backgrounds[backgroundNumber]}) no-repeat center center fixed`;
            }
        },
        [backgroundNumber]
    );

    const handleSlider = (event, newValue) => {
        setChangeInterval(newValue);
    };

    useEffect(() => {
        let newInterval;
        changeInterval === 10 ? (newInterval = 0) : (newInterval = changeInterval + 1);
        if (newInterval) {
            const interval = setInterval(() => {
                changeBackground(FORWARD);
            }, newInterval * 1000);

            return () => clearInterval(interval);
        }
    }, [changeBackground, changeInterval]);

    useEffect(() => {
        const el = document.documentElement;
        if (el) {
            el.style.background = `url(${backgrounds[0]}) no-repeat center center fixed`;
        }
    }, []);
    return (
        <LayoutOne
            navbar={<Navbar />}
            subGridChildren={[
                <Name>Mark Mullins</Name>,
                <IconList>
                    <SocialIconContainer>
                        <SocialIcon
                            url="https://github.com/markbmullins"
                            target="blank"
                            bgColor="#FFFFFF"
                            fgColor="#000000"
                        />
                    </SocialIconContainer>
                    <SocialIconContainer>
                        <SocialIcon
                            url="https://www.linkedin.com/in/markbmullins/"
                            target="blank"
                            bgColor="#FFFFFF"
                            fgColor="#000000"
                        />
                    </SocialIconContainer>
                    <SocialIconContainer>
                        <SocialIcon
                            url="mailto:markmullins95@gmail.com"
                            target="blank"
                            bgColor="#FFFFFF"
                            fgColor="#000000"
                        />
                    </SocialIconContainer>
                </IconList>,
                <StyledSlider
                    value={changeInterval}
                    onChange={handleSlider}
                    aria-labelledby="continuous-slider"
                    min={0}
                    max={10}
                    id="slider"
                />
            ]}
            sideNavLeft={
                <SideNavContainer>
                    <PreviousBackground onClick={() => changeBackground(BACKWARD)}>
                        {"<"}
                    </PreviousBackground>
                </SideNavContainer>
            }
            sideNavRight={
                <SideNavContainer>
                    <NextBackground onClick={() => changeBackground(FORWARD)}>{">"}</NextBackground>
                </SideNavContainer>
            }
            styles={{ Subgrid: "align-self: center;" }}
        />
    );
};

export default Home;
