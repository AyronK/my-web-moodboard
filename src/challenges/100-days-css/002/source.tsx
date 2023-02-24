import React from "react";
import { Frame } from "../Frame/source";
import "./source.scss";

export const Day2 = () => (
    <Frame>
        <div className="menu-icon">
            <input className="radio" type="radio" name="menu-icon" />
            <input className="radio" type="radio" name="menu-icon" />
            <div className="button">
                <div className="bar bar--top"></div>
                <div className="bar bar--middle"></div>
                <div className="bar bar--bottom"></div>
                <div className="bar bar--top--cover"></div>
            </div>
        </div>
    </Frame>
);
