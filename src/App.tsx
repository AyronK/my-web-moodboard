import React, { useEffect, useRef, useState } from "react";
import {
    Day1,
    Day10,
    Day11,
    Day12,
    Day13,
    Day14,
    Day15,
    Day16,
    Day17,
    Day18,
    Day19,
    Day2,
    Day20,
    Day21,
    Day22,
    Day23,
    Day24,
    Day25,
    Day26,
    Day27,
    Day28,
    Day29,
    Day3,
    Day30,
    Day31,
    Day32,
    Day33,
    Day34,
    Day35,
    Day36,
    Day37,
    Day38,
    Day39,
    Day4,
    Day5,
    Day6,
    Day7,
    Day8,
    Day9
} from "./challenges/100-days-css/index.t";
import styles from "./App.module.scss";
import { FrameSwitch } from "./FrameSwitch/FrameSwitch";
import { MonitorPlay, GithubLogo, Code } from "@phosphor-icons/react";
import { Weather } from "./challenges/100-days-css/009/source";
import { FetchedText } from "./FetchedText/FetchedText";

const stackBlitzBaseUrl =
    "https://stackblitz.com/github/AyronK/my-web-moodboard?embed=1&hideExplorer=1&hideNavigation=1&view=editor&showSidebar=0&devtoolsheight=0";

const Day9Wrapper: React.FC = () => {
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

    return (
        <>
            <Day9 {...newArgs} />
        </>
    );
};

const cards = [
    {
        component: <Day1 />,
        text: (
            <>
                <h2>#1 Cover</h2>
                <p>Simple gradient background with font composition.</p>
            </>
        )
    },
    {
        component: <Day2 />,

        text: (
            <>
                <h2>#2 Menu button</h2>
                <p>Animated state transition on click.</p>
            </>
        )
    },
    {
        component: <Day3 />,
        text: (
            <>
                <h2>#3 Day animation</h2>
                <p>Multiple animations combined into one scene.</p>
            </>
        )
    },
    {
        component: <Day4 />,
        text: (
            <>
                <h2>#4 Pulsing loader</h2>
                <p>Infinite loop loading animation.</p>
            </>
        )
    },
    {
        component: (
            <Day5
                {...{
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
                    ] as [number, number][][]
                }}
            />
        ),
        text: (
            <>
                <h2>#5 Chart</h2>
                <p>
                    An interactive chart drawn as SVG. Use mouse to move chart
                    or +/- buttons to zoom it.
                </p>
            </>
        )
    },
    {
        component: <Day6 />,
        text: (
            <>
                <h2>#6 Profile Card</h2>
                <p>Featuring CSS grid layout with interactive elements.</p>
            </>
        )
    },
    {
        component: <Day7 />,
        text: (
            <>
                <h2>#7 Notifications, Search and Menu</h2>
                <p>
                    Featuring header state transitions and on-hover animations.
                </p>
            </>
        )
    },
    {
        component: <Day8 />,
        text: (
            <>
                <h2>#8 Liquid particles</h2>
                <p>Filters are capable of magic.</p>
            </>
        )
    },
    {
        component: <Day9Wrapper />,
        text: (
            <>
                <h2>#9 Weather widget</h2>
                <p>What tomorrow will bring?</p>
            </>
        )
    },
    {
        component: <Day10 />,
        text: (
            <>
                <h2>#10 Smart Watch</h2>
                <p>
                    CSS custom properies combined with counters and animations
                    work together really well.
                </p>
            </>
        )
    },
    {
        component: <Day11 />,
        text: (
            <>
                <h2>#11 Shoes</h2>
                <p>Well... shoes. On invisible legs I suppose.</p>
            </>
        )
    },
    {
        component: <Day12 />,
        text: (
            <>
                <h2>#12 Tooltip</h2>
                <p>
                    Featuring animation on hover and arrow to anchored element.
                </p>
            </>
        )
    },
    {
        component: <Day13 />,
        text: (
            <>
                <h2>#13 User Gallery</h2>
                <p>Transition between a user gallery and profile details.</p>
            </>
        )
    },
    {
        component: <Day14 />,
        text: (
            <>
                <h2>#14 Business Card</h2>
                <p>Why settle for boring when you can have fun on the web?</p>
            </>
        )
    },
    {
        component: <Day15 />,
        text: (
            <>
                <h2>#15 File Upload</h2>
                <p>
                    Yes, you can actually drag and drop a file in there. But
                    don&apos;t worry, the upload process is faked.
                </p>
            </>
        )
    },
    {
        component: <Day16 />,
        text: (
            <>
                <h2>#16 Blobby</h2>
                <p>Shape changing object with some smooth animations.</p>
            </>
        )
    },
    {
        component: <Day17 />,
        text: (
            <>
                <h2>#17 Penrose Triangle</h2>
                <p>Impossible becomes possible with a bit of CSS.</p>
            </>
        )
    },
    {
        component: <Day18 />,
        text: (
            <>
                <h2>#18 Elastic fabric</h2>
                <p>
                    Featuring 3D transformations spiced up with&nbsp;
                    <code>backface-visibility</code>.
                </p>
            </>
        )
    },
    {
        component: <Day19 />,
        text: (
            <>
                <h2>#19 Slider</h2>
                <p>
                    In many cases combining CSS selectors can replace
                    JavaScript.
                </p>
            </>
        )
    },
    {
        component: <Day20 />,
        text: (
            <>
                <h2>#20 Email sending animation</h2>
                <p>
                    SVG animations can make user interactions much more
                    engagning and interesting.
                </p>
            </>
        )
    },
    {
        component: <Day21 />,
        text: (
            <>
                <h2>#21 Pac-Man</h2>
                <p>Waka waka waka waka waka...</p>
            </>
        )
    },
    {
        component: <Day22 />,
        text: (
            <>
                <h2>#22 Fitness Tracker</h2>
                <p>
                    Featuring once again custom CSS properties, but also inline
                    variables for dynamic control of the animation.
                </p>
            </>
        )
    },
    {
        component: <Day23 />,
        text: (
            <>
                <h2>#23 Typography animation</h2>
                <p>Enhance boring headings with smooth transitions.</p>
            </>
        )
    },
    {
        component: <Day24 />,
        text: (
            <>
                <h2>#24 Confirmation animation</h2>
                <p>
                    Instant feedback. Instant engagement. Animating SVG paths
                    can do magic.
                </p>
            </>
        )
    },
    {
        component: <Day25 />,
        text: (
            <>
                <h2>#25 Map location</h2>
                <p>Where would you go?</p>
            </>
        )
    },
    {
        component: <Day26 />,
        text: (
            <>
                <h2>#26 Deck of cards</h2>
                <p>Read. Confirm. Shuffle. Repeat.</p>
            </>
        )
    },
    {
        component: <Day27 />,
        text: (
            <>
                <h2>#27 Checklist</h2>
                <p>
                    That feeling when you complete a task, The relief, the
                    accomplishment...
                </p>
            </>
        )
    },
    {
        component: <Day28 />,
        text: (
            <>
                <h2>#28 Alarm</h2>
                <p>That should keep you awake!</p>
            </>
        )
    },
    {
        component: <Day29 />,
        text: (
            <>
                <h2>#29 Search</h2>
                <p>
                    Don't use placeholders! Labels can serve the same purpose
                    while being much more accessible.
                </p>
            </>
        )
    },
    {
        component: <Day30 />,
        text: (
            <>
                <h2>#30 Celtic knot</h2>
                <p>
                    Animations are <i>knot</i> meant to be boring.
                </p>
            </>
        )
    },
    {
        component: <Day31 />,
        text: (
            <>
                <h2>#31 Pendulum wave</h2>
                <p>
                    Simple math. Everything here is achieved with animation
                    duration.
                </p>
            </>
        )
    },
    {
        component: <Day32 />,
        text: (
            <>
                <h2>#32 Counter</h2>
                <p>Flip it. Just let it finish...</p>
            </>
        )
    },
    {
        component: <Day33 />,
        text: (
            <>
                <h2>#33 Sunny day</h2>
                <p>Relax!</p>
            </>
        )
    },
    {
        component: <Day34 />,
        text: (
            <>
                <h2>#34 Text animation</h2>
                <p>Yet another one!</p>
            </>
        )
    },
    {
        component: <Day35 />,
        text: (
            <>
                <h2>#35 Loader</h2>
                <p>
                    Not just plain rotation. Adding a bit of spice to spinner is
                    not that hard!
                </p>
            </>
        )
    },
    {
        component: <Day36 />,
        text: (
            <>
                <h2>#36 Tabs</h2>
                <p>
                    Entry and exit transitions can enhance the experience when
                    using tabs.
                </p>
            </>
        )
    },
    {
        component: <Day37 />,
        text: (
            <>
                <h2>#37 Carousel</h2>
                <p>
                    If there is any <code>transform</code> property that should
                    get more attenion I sincerely believe it is{" "}
                    <code>perspective</code>.
                </p>
            </>
        )
    },
    {
        component: <Day38 />,
        text: (
            <>
                <h2>#38 Logo transition</h2>
                <p>Sometimes a simple solution just suits the best.</p>
            </>
        )
    },
    {
        component: <Day39 />,
        text: (
            <>
                <h2>#39 Menu</h2>
                <p>Click to unfold!</p>
            </>
        )
    }
];

function App() {
    function switchFrame(frameIdx: number, cardIdx: number) {
        const affix = (cardIdx + 1).toString().padStart(3, "0");
        const tsxFilePath = `src/challenges/100-days-css/${affix}/source.tsx`;
        const sassFilePath = `src/challenges/100-days-css/${affix}/source.module.scss`;
        const stackBlitzUrl = `${stackBlitzBaseUrl}&file=${tsxFilePath},${sassFilePath}&initialPath=${encodeURIComponent(
            `#${cardIdx + 1}`
        )}`;
        switch (frameIdx) {
            case 0:
                return <>{cards[cardIdx].component}</>;
            case 1:
                return (
                    <>
                        <iframe className={styles.iframe} src={stackBlitzUrl} />
                    </>
                );
        }
    }
    return (
        <>
            <header>
                <h2>Ayron&apos;s Web Portfolio </h2>
                <div className={styles.links}>
                    <a href="https://github.com/AyronK">
                        <GithubLogo size={16} /> My GitHub
                    </a>
                    <a href="https://github.com/AyronK/my-web-moodboard">
                        <GithubLogo size={16} /> Project Site
                    </a>
                </div>
            </header>
            <hr />
            <section className={styles.note}>
                The inspiration for my work below comes from&nbsp;
                <strong>
                    <a href="https://100dayscss.com">100 Days CSS Challenge</a>
                </strong>
                , and the snippets were originally designed by{" "}
                <strong>Matthias&nbsp;Martin</strong>. These snippets are an
                invaluable resource for my education, and I believe they should
                be treated as learning materials. Below, you will find my
                implementation of various CSS scenarios, often with additional
                modifications and extensions.
                <br />
                <br />
                Please note that this work is in progress and subject to further
                updates, additions and revisions.
            </section>
            <hr />
            <article>
                <ul className={styles.grid}>
                    {cards.map((c, cardIdx) => (
                        <li key={cardIdx} id={`day-${cardIdx + 1}`}>
                            <FrameSwitch
                                text={() => c.text}
                                overflow={(frameIdx) => frameIdx !== 0}
                                buttons={[
                                    <MonitorPlay key="demo" size={20} />,
                                    <Code key="code" size={20} />
                                ]}
                            >
                                {(frameIdx) => switchFrame(frameIdx, cardIdx)}
                            </FrameSwitch>
                        </li>
                    ))}
                </ul>
            </article>
            <hr />
            <footer>
                <h2>Licence</h2>
                <a href="https://github.com/AyronK/my-web-moodboard/blob/main/LICENSE.md">
                    Github
                </a>
                <FetchedText url="https://raw.githubusercontent.com/AyronK/my-web-moodboard/main/LICENSE.md">
                    {(text) => <blockquote>{text}</blockquote>}
                </FetchedText>
                <blockquote></blockquote>
            </footer>
        </>
    );
}

export default App;
