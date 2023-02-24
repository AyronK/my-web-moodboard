import React from "react";
import { Frame } from "../Frame/source";
import "./source.scss";

export const Day3 = () => (
    <Frame>
        <div className="container">
            <div className="sky"></div>
            <div className="pyramid-shadow"></div>
            <div className="pyramid-front"></div>
            <div className="pyramid-side"></div>
            <div className="sand"></div>
            <div className="stars-container">
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>
            <div className="sun-container">
                <div className="sun"></div>
            </div>
            <div className="clouds-container">
                <div className="cloud"></div>
                <div className="cloud"></div>
            </div>
        </div>
    </Frame>
);
