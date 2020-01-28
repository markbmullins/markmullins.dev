import React, { useState, useEffect, useCallback } from "react";
import styled from 'styled-components';
import { SocialIcon } from "react-social-icons";
import { StylesProvider } from '@material-ui/core/styles';
import Slider from "@material-ui/core/Slider";
import Image from "../Image/Image";

const files = ["sunset4.png", "sun.png", "sunset5.png", "plane.png", "triangles.jpg", "sunset.jpg", "sun2.jpg", "sun3.jpg"];
const backgrounds = files.map(file => <Image source={`${process.env.PUBLIC_URL}/backgrounds/${file}`} />)

const StyledSlider = styled(Slider)`
    margin-top: 10%;
    color: #ffffff;
`;

const SocialIconContainer = styled.li`
    margin: auto;
`;

const Name = styled.h1`
    color: #ffffff;
    font-family: "Monoton", cursive;
    font-size: 100px;
    z-index: 2;
`;

const PageContent = styled.div`
    display: block;
    position: absolute;
    bottom: 35%;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 2;
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

const BackgroundNavigation = styled.span`
    color: white;
    position: absolute;
    top: 50%;
    width: 100%;
    height: 50px;
`;

const BackgroundChanger = styled.span`
    font-size: 40px;
    cursor: pointer;
`;

const NextBackground = styled(BackgroundChanger)`
    margin-left: auto;
    margin-right: 5%;
`;

const PreviousBackground = styled(BackgroundChanger)`
    margin-left: 5%;
`;

function App() {
    const [backgroundNumber, setBackgroundNumber] = useState(0);
    const [changeInterval, setChangeInterval] = useState(5);
    const FORWARD = "FORWARD";
    const BACKWARD = "BACKWARD";

    const changeBackground = useCallback(direction => {
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
    });

    const handleSlider = (event, newValue) => {
        setChangeInterval(newValue);
    };

    useEffect(() => {
        if (changeInterval !== 0) {
            const interval = setInterval(() => {
                changeBackground(FORWARD);
            }, changeInterval * 1000);

            return () => clearInterval(interval);
        }
    }, [changeBackground, changeInterval]);

    return (
        <StylesProvider injectFirst>
            <div>
                <PageContent>
                    <Name>Mark Mullins</Name>
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
                    </IconList>
                    <StyledSlider
                        value={changeInterval}
                        onChange={handleSlider}
                        aria-labelledby="continuous-slider"
                        valueLabelDisplay="auto"
                        min={0}
                        max={10}
                        id="slider"
                    />
                </PageContent>
                {backgrounds[backgroundNumber]}
                <BackgroundNavigation>
                    <PreviousBackground onClick={() => changeBackground(BACKWARD)}>
                        {"<"}
                    </PreviousBackground>
                    <NextBackground onClick={() => changeBackground(FORWARD)}>
                        {">"}
                    </NextBackground>
                </BackgroundNavigation>
            </div>
        </StylesProvider>
    );
}

export default App;
