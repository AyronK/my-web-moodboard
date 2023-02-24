import { FetchedText as Component } from "./source";
import { ComponentMeta } from "@storybook/react";

export default {
    title: "FetchedText",
    component: Component,
    parameters: { chromatic: { disableSnapshot: true } }
} as ComponentMeta<typeof Component>;

export const FetchedText: ComponentMeta<typeof Component> = {
    args: {
        url: "/",
        fallback: "Loading..."
    }
};
