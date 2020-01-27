import React from "react";
import "./Image.scss";
const Image = ({ source }) => {
    return <img className="image" src={source} alt="sun"></img>;
};

export default Image;
