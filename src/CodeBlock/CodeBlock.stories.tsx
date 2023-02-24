import { CodeBlock } from "./CodeBlock";
import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Frame } from "../Frame/Frame";

export default {
    component: CodeBlock,
    decorators: [
        (Story) => (
            <Frame>
                <Story />
            </Frame>
        )
    ]
} as ComponentMeta<typeof CodeBlock>;

export const Default: ComponentMeta<typeof CodeBlock> = {
    args: {
        code: "console.log();",
        language: "js",
        githubUrl: "https://github.com"
    }
};
