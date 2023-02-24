import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Frame } from "../../../Frame/Frame";
import { Day3 as Component } from "./source";

export default {
    title: "Challenges/100 Days of CSS",
    component: Component,
    decorators: [
        (Story) => (
            <Frame>
                <Story />
            </Frame>
        )
    ]
} as ComponentMeta<typeof Component>;

export const Day3 = {};
