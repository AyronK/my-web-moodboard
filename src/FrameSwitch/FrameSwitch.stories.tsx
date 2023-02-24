import React from "react";
import { FrameSwitch } from "./FrameSwitch";
import { ComponentMeta } from "@storybook/react";
import { FileCss, FileTsx, Play } from "phosphor-react";
import { Center } from "../Frame/Frame";

export default {
    component: FrameSwitch
} as ComponentMeta<typeof FrameSwitch>;

export const Default: ComponentMeta<typeof FrameSwitch> = {
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
