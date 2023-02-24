import { Frame as FrameComponent } from "./source";
import { ComponentMeta } from "@storybook/react";
import React from "react";

export default {
    title: "Challenges/100 Days of CSS",
    component: FrameComponent
};

export const Frame = {};

export const FrameWithText: ComponentMeta<typeof FrameComponent> = {
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
