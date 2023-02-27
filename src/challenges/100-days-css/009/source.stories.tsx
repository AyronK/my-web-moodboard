import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Frame } from "../../../Frame/Frame";
import { Day9 as Component, Weather } from "./source";

export default {
    title: "Challenges/100 Days of CSS/Day9",
    component: Component,
    decorators: [
        (Story) => (
            <Frame>
                <Story />
            </Frame>
        )
    ]
} as ComponentMeta<typeof Component>;

export const Day = {
    args: {
        weather: Weather.ClearSky,
        night: false
    }
};

export const Night = {
    args: {
        weather: Weather.ClearSky,
        night: true
    }
};

export const DayCloudy = {
    args: {
        ...Day.args,
        weather: Weather.Cloudy
    }
};

export const NightCloudy = {
    args: {
        ...Night.args,
        weather: Weather.Cloudy
    }
};

export const DayRaining = {
    args: {
        ...Day.args,
        weather: Weather.Raining
    }
};

export const NightRaining = {
    args: {
        ...Night.args,
        weather: Weather.Raining
    }
};
export const DayStorm = {
    args: {
        ...Day.args,
        weather: Weather.Storm
    }
};

export const NightStorm = {
    args: {
        ...Night.args,
        weather: Weather.Storm
    }
};
export const DaySnowing = {
    args: {
        ...Day.args,
        weather: Weather.Snowing
    }
};

export const NightSnowing = {
    args: {
        ...Night.args,
        weather: Weather.Snowing
    }
};
