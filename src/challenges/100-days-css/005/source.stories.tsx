import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Frame } from "../../../Frame/Frame";
import { Day5 as Component } from "./source";

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

export const Day5 = {
    args: {
        date: "01. Feb - 07. Feb",
        revenue: 3621.79,
        labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        legend: ["Views", "Purchases"],
        data: [
            [
                [9, 61],
                [50, 50],
                [90, 65],
                [130, 55],
                [171, 61],
                [211, 74],
                [251, 64]
            ],
            [
                [9, 46],
                [50, 12],
                [90, 23],
                [130, 11],
                [171, 38],
                [211, 48],
                [251, 19]
            ]
        ]
    }
};
