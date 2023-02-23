import React from "react";
import "./source.css";

export const Frame = () => (
    <div className="frame">
        <div className="background">
            <div className="center">
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
            </div>
        </div>
    </div>
);
