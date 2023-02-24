import React from "react";
import { FrameSwitch as Component } from "./source";
import { ComponentMeta } from "@storybook/react";
import { FileCss, FileTsx, Play } from "phosphor-react";
import { Center } from "../Frame/source";

export default {
    title: "Challenges/100 Days of CSS",
    component: Component
} as ComponentMeta<typeof Component>;

export const FrameSwitch: ComponentMeta<typeof Component> = {
    args: {
        buttons: [
            <Play key="tsx" size={20} />,
            <FileTsx key="tsx" size={20} />,
            <FileCss key="css" size={20} />
        ],
        children: (idx) => {
            switch (idx) {
                case 0:
                    return (
                        <Center>
                            <Play size={128} color="white" />
                        </Center>
                    );
                case 1:
                    return (
                        <Center>
                            <FileTsx size={128} color="white" />
                        </Center>
                    );
                case 2:
                    return (
                        <Center>
                            <FileCss size={128} color="white" />
                        </Center>
                    );
            }
        }
    }
};
