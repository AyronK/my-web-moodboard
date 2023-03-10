import { ComponentMeta, Story } from "@storybook/react";
import React, { useEffect, useRef, useState } from "react";
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

export const Demo = {
    decorators: [
        (Story: Story, args: any) => {
            const frames = useRef([
                { weather: Weather.Cloudy, night: true },
                { weather: Weather.Cloudy, night: false },
                { weather: Weather.Snowing, night: true },
                { weather: Weather.Snowing, night: false },
                { weather: Weather.Raining, night: true },
                { weather: Weather.Raining, night: false },
                { weather: Weather.Storm, night: true },
                { weather: Weather.Storm, night: false },
                { weather: Weather.ClearSky, night: true },
                { weather: Weather.ClearSky, night: false }
            ]);
            const [newArgs, setNewArgs] = useState(frames.current[0]);

            useEffect(() => {
                let i = 0;
                const timer = setInterval(() => {
                    i++;
                    setNewArgs(frames.current[i % frames.current.length]);
                }, (20 * 1000) / frames.current.length);
                return () => clearInterval(timer);
            }, []);

            return <Story args={newArgs} />;
        }
    ],
    argTypes: {
        weather: { control: false },
        night: { control: false }
    }
};
