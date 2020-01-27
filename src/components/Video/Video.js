import React from "react";
import "./Video.scss";

const Video = ({ source }) => {
    return (
        <video className="video" autoPlay muted loop id="myVideo">
            <source src={source} type="video/mp4" />
        </video>
    );
};

export default Video;
