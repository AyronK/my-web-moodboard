import React from "react";
import { Frame } from "../../Frame/source";
import "./source.scss";

export const Spinner = () => (
    <Frame>
        <div className="center">
            <div className="loader"></div>
        </div>
    </Frame>
);
