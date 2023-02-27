import React from "react";
import {
    Day1,
    Day2,
    Day3,
    Day4,
    Day5,
    Day6,
    Day7,
    Day8
} from "./challenges/100-days-css/index.t";
import styles from "./App.module.scss";
import { FrameSwitch } from "./FrameSwitch/FrameSwitch";
import { MonitorPlay, FileTsx, FileCss, GithubLogo } from "phosphor-react";
import { FetchedText } from "./FetchedText/FetchedText";
import { CodeBlock } from "./CodeBlock/CodeBlock";

const baseRawUrl =
    "https://raw.githubusercontent.com/AyronK/my-web-moodboard/main/src";

const baseUrl = "https://github.com/AyronK/my-web-moodboard/tree/main/src";

const challengesPath = "/challenges/100-days-css/";

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
    }
];

function App() {
    function switchFrame(frameIdx: number, cardIdx: number) {
        const rawUrl = `${baseRawUrl}${challengesPath}/${(cardIdx + 1)
            .toString()
            .padStart(3, "0")}`;
        const url = `${baseUrl}${challengesPath}/${(cardIdx + 1)
            .toString()
            .padStart(3, "0")}`;
        switch (frameIdx) {
            case 0:
                return <>{cards[cardIdx].component}</>;
            case 1:
                return (
                    <>
                        <FetchedText url={`${rawUrl}/source.tsx`}>
                            {(text) => (
                                <CodeBlock
                                    code={text?.trim()}
                                    language={"tsx"}
                                    githubUrl={`${url}/source.tsx`}
                                />
                            )}
                        </FetchedText>
                    </>
                );
            case 2:
                return (
                    <>
                        <FetchedText url={`${rawUrl}/source.module.scss`}>
                            {(text) => (
                                <CodeBlock
                                    code={text?.trim()}
                                    language={"sass"}
                                    githubUrl={`${url}/source.module.scss`}
                                />
                            )}
                        </FetchedText>
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
                                    <MonitorPlay key="tsx" size={20} />,
                                    <FileTsx key="tsx" size={20} />,
                                    <FileCss key="css" size={20} />
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
