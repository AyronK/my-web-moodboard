import { Frame } from "./Frame";
import { ComponentMeta } from "@storybook/react";
import React from "react";

export default {
    component: Frame
};

export const Default = {};

export const WithText: ComponentMeta<typeof Frame> = {
    args: {
        text: (
            <>
                <h1>Title</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </>
        )
    }
};
