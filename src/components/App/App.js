import React, { useState, useEffect, useCallback } from "react";
import { SocialIcon } from "react-social-icons";
import Slider from "@material-ui/core/Slider";
import Image from "../Image/Image";
import Video from "../Video/Video";

import "./App.css";

const backgrounds = [
    <Image source={`${process.env.PUBLIC_URL}/spikes.png`} />,
    <Image source={`${process.env.PUBLIC_URL}/sunset4.png`} />,
    <Image source={`${process.env.PUBLIC_URL}/sun.png`} />,
    <Image source={`${process.env.PUBLIC_URL}/sunset5.png`} />,
    <Image source={`${process.env.PUBLIC_URL}/plane.png`} />,
    <Image source={`${process.env.PUBLIC_URL}/triangles.jpg`} />,
    <Image source={`${process.env.PUBLIC_URL}/sunset.jpg`} />,
    <Image source={`${process.env.PUBLIC_URL}/sun2.jpg`} />,
    <Image source={`${process.env.PUBLIC_URL}/sun3.jpg`} />
];
function App() {
    const [backgroundNumber, setBackgroundNumber] = useState(0);
    const [changeInterval, setChangeInterval] = useState(5);
    const FORWARD = "FORWARD";
    const BACKWARD = "BACKWARD";

    const changeBackground = useCallback(direction => {
        switch (direction) {
            case FORWARD:
                backgroundNumber === backgrounds.length - 1
                    ? setBackgroundNumber(0)
                    : setBackgroundNumber(backgroundNumber + 1);
                break;
            case BACKWARD:
                backgroundNumber === 0
                    ? setBackgroundNumber(backgrounds.length - 1)
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
        <div className="App">
            <div className="container">
                <h1 className="name">Mark Mullins</h1>

                <ul className="social">
                    <li className="social-icon">
                        <SocialIcon
                            url="https://github.com/markbmullins"
                            target="blank"
                            bgColor="#FFFFFF"
                            fgColor="#000000"
                        />
                    </li>
                    <li className="social-icon">
                        <SocialIcon
                            url="https://www.linkedin.com/in/markbmullins/"
                            target="blank"
                            bgColor="#FFFFFF"
                            fgColor="#000000"
                        />
                    </li>
                    <li className="social-icon">
                        <SocialIcon
                            url="mailto:markmullins95@gmail.com"
                            target="blank"
                            bgColor="#FFFFFF"
                            fgColor="#000000"
                        />
                    </li>
                </ul>
                <Slider
                    value={changeInterval}
                    onChange={handleSlider}
                    aria-labelledby="continuous-slider"
                    valueLabelDisplay="auto"
                    min={0}
                    max={10}
                    id="slider"
                />
            </div>
            {backgrounds[backgroundNumber]}
            <div className="image-navigation">
                <span className="changer-button left" onClick={() => changeBackground(BACKWARD)}>
                    {"<"}
                </span>
                <span className="changer-button right" onClick={() => changeBackground(FORWARD)}>
                    {">"}
                </span>
            </div>
        </div>
    );
}

export default App;
