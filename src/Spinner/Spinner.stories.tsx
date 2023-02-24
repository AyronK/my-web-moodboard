import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Frame } from "../Frame/Frame";
import { Spinner } from "./Spinner";

export default {
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
