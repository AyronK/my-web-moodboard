import { StoryObj } from "@storybook/react";
import { Frame } from "../../../Frame/Frame";
import { Day95 as Component } from "./source";

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
} as StoryObj;

export const Day95 = {};
