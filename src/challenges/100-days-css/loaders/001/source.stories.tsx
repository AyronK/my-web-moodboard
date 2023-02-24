import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Frame } from "../../Frame/source";
import { Spinner } from "./source";

export default {
    title: "Challenges/100 Days of CSS/Spinners",
    component: Spinner,
    decorators: [
        (Story) => (
            <Frame>
                <Story />
            </Frame>
        )
    ]
} as ComponentMeta<typeof Spinner>;

export const Variant1 = {};
