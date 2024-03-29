import React, { useEffect, useRef, useState } from "react";
import {
    Day1,
    Day10,
    Day100,
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
    Day40,
    Day41,
    Day42,
    Day43,
    Day44,
    Day45,
    Day46,
    Day47,
    Day48,
    Day49,
    Day5,
    Day50,
    Day51,
    Day52,
    Day53,
    Day54,
    Day55,
    Day56,
    Day57,
    Day58,
    Day59,
    Day6,
    Day60,
    Day61,
    Day62,
    Day63,
    Day64,
    Day65,
    Day66,
    Day67,
    Day68,
    Day69,
    Day7,
    Day70,
    Day71,
    Day72,
    Day73,
    Day74,
    Day75,
    Day76,
    Day77,
    Day78,
    Day79,
    Day8,
    Day80,
    Day81,
    Day82,
    Day83,
    Day84,
    Day85,
    Day86,
    Day87,
    Day88,
    Day89,
    Day9,
    Day90,
    Day91,
    Day92,
    Day93,
    Day94,
    Day95,
    Day96,
    Day97,
    Day98,
    Day99
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
    },
    {
        component: <Day40 />,
        text: (
            <>
                <h2>#40 Photo gallery</h2>
                <p>
                    Click to take a closer look at the picture. All animations
                    are done with pure CSS using <code>transform-origin</code>.
                </p>
            </>
        )
    },
    {
        component: <Day41 />,
        text: (
            <>
                <h2>#41 Error modal</h2>
                <p>The less you see it the better!</p>
            </>
        )
    },
    {
        component: <Day42 />,
        text: (
            <>
                <h2>#42 Night sky</h2>
                <p>
                    You can create beautiful things using CSS! No need to make a
                    wish.
                </p>
            </>
        )
    },
    {
        component: <Day43 />,
        text: (
            <>
                <h2>#43 Lightbulb</h2>
                <p>
                    Let <code>drop-shadow</code> bring light upon you!
                </p>
            </>
        )
    },
    {
        component: <Day44 />,
        text: (
            <>
                <h2>#44 Twisted Pyramid</h2>
                <p>It's not that hard to trick your mind with a bit of CSS.</p>
            </>
        )
    },
    {
        component: <Day45 />,
        text: (
            <>
                <h2>#45 Hover button</h2>
                <p>Make your interactions shiny!</p>
            </>
        )
    },
    {
        component: <Day46 />,
        text: (
            <>
                <h2>#46 Iris circles</h2>
                <p>Swirl!</p>
            </>
        )
    },
    {
        component: <Day47 />,
        text: (
            <>
                <h2>#47 Pixel Art</h2>
                <p>
                    Take a break, have a coffee! Play around and make your own
                    art!
                </p>
            </>
        )
    },
    {
        component: <Day48 />,
        text: (
            <>
                <h2>#48 Cube</h2>
                <p>
                    With CSS 2D is not the limit. Simple 3D objects and
                    transformations are no problem.
                </p>
            </>
        )
    },
    {
        component: <Day49 />,
        text: (
            <>
                <h2>#49 Mouse tracker</h2>
                <p>
                    Creating mouse tracking with pure CSS can be tricky, but it
                    is indeed possible!
                </p>
            </>
        )
    },
    {
        component: <Day50 />,
        text: (
            <>
                <h2>#50 Bounce</h2>
                <p>
                    Following the 12 principles of animation can bring anything
                    into motion!
                </p>
            </>
        )
    },
    {
        component: <Day51 />,
        text: (
            <>
                <h2>#51 Timer</h2>
                <p>
                    Incrementing a counter each second and play/pause button can
                    only be done with JavaScript, right? Wrong! It's possible
                    with pure HTML and CSS.
                </p>
            </>
        )
    },
    {
        component: <Day52 />,
        text: (
            <>
                <h2>#52 Hypnosis</h2>
                <p>Don't look at it for too long!</p>
            </>
        )
    },
    {
        component: <Day53 />,
        text: (
            <>
                <h2>#53 Slider</h2>
                <p>
                    Default browser inputs can be pretty borring if not they are
                    not styled using CSS.
                </p>
            </>
        )
    },
    {
        component: <Day54 />,
        text: (
            <>
                <h2>#54 Waves</h2>
                <p>Enjoy a calming view!</p>
            </>
        )
    },
    {
        component: <Day55 />,
        text: (
            <>
                <h2>#55 Thermostat</h2>
                <p>Keep it cool!</p>
            </>
        )
    },
    {
        component: <Day56 />,
        text: (
            <>
                <h2>#56 Flower</h2>
                <p>🏵️</p>
            </>
        )
    },
    {
        component: <Day57 />,
        text: (
            <>
                <h2>#57 Icosahedron</h2>
                <p>
                    Creating complex 3D object with plain CSS can be quite
                    tidoues, yet possible...
                </p>
            </>
        )
    },
    {
        component: <Day58 />,
        text: (
            <>
                <h2>#58 Sliced sphere</h2>
            </>
        )
    },
    {
        component: <Day59 />,
        text: (
            <>
                <h2>#59 Slice transition</h2>
                <p>
                    Use your space, put more content on interactive elements and
                    engage user with smooth transitions.
                </p>
            </>
        )
    },
    {
        component: <Day60 />,
        text: (
            <>
                <h2>#60 Blur overlay</h2>
                <p>
                    Relatively easy blur backdrop overlay can be tricky to do
                    with just CSS.
                </p>
            </>
        )
    },
    {
        component: <Day61 />,
        text: (
            <>
                <h2>#61 Animated gradient</h2>
                <p>Is it a trend now? Will it be again?</p>
            </>
        )
    },
    {
        component: <Day62 />,
        text: (
            <>
                <h2>#62 Pricing dashboard</h2>
                <p>How much would you pay from your pocket for web services?</p>
            </>
        )
    },
    {
        component: <Day63 />,
        text: (
            <>
                <h2>#63 Infinite tunnel</h2>
                <p>What if there is a light at the end?</p>
            </>
        )
    },
    {
        component: <Day64 />,
        text: (
            <>
                <h2>#64 Button</h2>
                <p>Hover over it!</p>
            </>
        )
    },
    {
        component: <Day65 />,
        text: (
            <>
                <h2>#65 Ellipse animation</h2>
                <p>
                    How about using it as your loading scree? Or a transition
                    between pages?
                </p>
            </>
        )
    },
    {
        component: <Day66 />,
        text: (
            <>
                <h2>#66 Checkbox ripple</h2>
                <p>Give users more feedback on the actions they take!</p>
            </>
        )
    },
    {
        component: <Day67 />,
        text: (
            <>
                <h2>#67 Sunshade</h2>
                <p>Enjoy the weather!</p>
            </>
        )
    },
    {
        component: <Day68 />,
        text: (
            <>
                <h2>#68 Audio recording button</h2>
                <p>Quickly, start recording! You're on the air!</p>
            </>
        )
    },
    {
        component: <Day69 />,
        text: (
            <>
                <h2>#69 Eyes</h2>
                <p>They're constantly watching you!</p>
            </>
        )
    },
    {
        component: <Day70 />,
        text: (
            <>
                <h2>#70 Calendar</h2>
                <p>What are your plans for the weekend?</p>
            </>
        )
    },
    {
        component: <Day71 />,
        text: (
            <>
                <h2>#71 Morse code keyboard</h2>
                <p>
                    It would be extremely difficult without a preprocessor like
                    SASS. Thankfully it is possible!
                </p>
            </>
        )
    },
    {
        component: <Day72 />,
        text: (
            <>
                <h2>#72 Circles animation</h2>
                <p>
                    A simple and meditative animation made of circles. What
                    geometric patterns of circles come to your mind?
                </p>
            </>
        )
    },
    {
        component: <Day73 />,
        text: (
            <>
                <h2>#73 World carousel</h2>
                <p>Sometimes you just need to spoil yourself!</p>
            </>
        )
    },
    {
        component: <Day74 />,
        text: (
            <>
                <h2>#74 Pagination</h2>
                <p>Is there what you're looking for on the next page?</p>
            </>
        )
    },
    {
        component: <Day75 />,
        text: (
            <>
                <h2>#75 Spinning discs</h2>
                <p>Even though 3D sphere is not possible in pure CSS, we can make an illusion of it!</p>
            </>
        )
    },
    {
        component: <Day76 />,
        text: (
            <>
                <h2>#76 Password input</h2>
                <p>Shush, keep it secret!</p>
            </>
        )
    },
    {
        component: <Day77 />,
        text: (
            <>
                <h2>#77 Motion blur</h2>
                <p>Well, not literally... at least until there's native support in web browsers. Looks smooth though!</p>
            </>
        )
    },
    {
        component: <Day78 />,
        text: (
            <>
                <h2>#78 Hover states</h2>
                <p>How elevation can affect perception of the element?</p>
            </>
        )
    },
    {
        component: <Day79 />,
        text: (
            <>
                <h2>#79 Animated lines</h2>
                <p>I kind of love how creative you can be with some basic geometry.</p>
            </>
        )
    },
    {
        component: <Day80 />,
        text: (
            <>
                <h2>#80 Flexbox accordion</h2>
                <p>Simple accordion using flex properties.</p>
            </>
        )
    },
    {
        component: <Day81 />,
        text: (
            <>
                <h2>#81 Jumping ball</h2>
                <p>Following the principles of animation even physics is possible with CSS.</p>
            </>
        )
    },
    {
        component: <Day82 />,
        text: (
            <>
                <h2>#82 Action Button</h2>
                <p>Make sure that the user gets instant action feedback.</p>
            </>
        )
    },
    {
        component: <Day83 />,
        text: (
            <>
                <h2>#83 Warp Drive</h2>
                <p>Let's travel to another galaxy. Do they have CSS there?</p>
            </>
        )
    },
    {
        component: <Day84 />,
        text: (
            <>
                <h2>#84 Book</h2>
                <p>No image, no SVG, just CSS and gradients.</p>
            </>
        )
    },
    {
        component: <Day85 />,
        text: (
            <>
                <h2>#85 Plop</h2>
                <p>Let's say it's gravity warping the space. Why not?</p>
            </>
        )
    },
    {
        component: <Day86 />,
        text: (
            <>
                <h2>#86 Newton's Cradle</h2>
                <p>Just let it click and clack.</p>
            </>
        )
    },
    {
        component: <Day87 />,
        text: (
            <>
                <h2>#87 Emerald</h2>
                <p>It shines!</p>
            </>
        )
    },
    {
        component: <Day88 />,
        text: (
            <>
                <h2>#88 Candle</h2>
                <p>The flame is animated using CSS border radius.</p>
            </>
        )
    },
    {
        component: <Day89 />,
        text: (
            <>
                <h2>#89 Animated pattern</h2>
                <p>Don't stare for too long!</p>
            </>
        )
    },
    {
        component: <Day90 />,
        text: (
            <>
                <h2>#90 Cursor trap</h2>
                <p>It won't lock your movement but certainly will keep you embraced.</p>
            </>
        )
    },
    {
        component: <Day91 />,
        text: (
            <>
                <h2>#91 Cube loader</h2>
                <p>In case you need to bring more depth into your application.</p>
            </>
        )
    },
    {
        component: <Day92 />,
        text: (
            <>
                <h2>#92 Dancing dots</h2>
                <p>Combining simple routes can add up to an interesting pattern.</p>
            </>
        )
    },
    {
        component: <Day93 />,
        text: (
            <>
                <h2>#93 Padlock</h2>
                <p>Combining multiple box-shadows can improve depth perception.</p>
            </>
        )
    },
    {
        component: <Day94 />,
        text: (
            <>
                <h2>#94 Christmas tree</h2>
                <p>🎶 It begins to look a lot like christmas... 🎵</p>
            </>
        )
    },
    {
        component: <Day95 />,
        text: (
            <>
                <h2>#95 Panda</h2>
                <p>Innocent, cute and consists entirely of simple basic shapes. Fancy a bamboo?</p>
            </>
        )
    },
    {
        component: <Day96 />,
        text: (
            <>
                <h2>#96 Jumping Marshmallow</h2>
                <p>Squashed and stretched, this is how objects in motion should look like.</p>
            </>
        )
    },
    {
        component: <Day97 />,
        text: (
            <>
                <h2>#97 Waving man</h2>
                <p>Don't be shy, wave back!</p>
            </>
        )
    },
    {
        component: <Day98 />,
        text: (
            <>
                <h2>#98 Suprise box</h2>
                <p>What would you put inside?</p>
            </>
        )
    },
    {
        component: <Day99 />,
        text: (
            <>
                <h2>#99 State transition</h2>
                <p>Yet another effect to keep user engaged.</p>
            </>
        )
    },
    {
        component: <Day100 />,
        text: (
            <>
                <h2>#100 The end</h2>
                <p>This challange came to an end. What a journey!</p>
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
