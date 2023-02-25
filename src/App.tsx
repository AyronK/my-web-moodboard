import React from "react";
import {
    Day1,
    Day2,
    Day3,
    Day4,
    Day5,
    Day6
} from "./challenges/100-days-css/index.t";
import styles from "./App.module.scss";
import { FrameSwitch } from "./FrameSwitch/FrameSwitch";
import { MonitorPlay, FileTsx, FileCss, GithubLogo } from "phosphor-react";
import { FetchedText } from "./FetchedText/FetchedText";
import { CodeBlock } from "./CodeBlock/CodeBlock";

const baseRawUrl =
    "https://raw.githubusercontent.com/AyronK/my-web-moodboard/main/src";

const baseUrl = "https://github.com/AyronK/my-web-moodboard/tree/main/src";

const cards = [
    {
        component: <Day1 />,
        text: (
            <>
                <h1>Simple cover</h1>
                <p>Featuring gradient background with font composition.</p>
            </>
        ),
        path: "/challenges/100-days-css/001"
    },
    {
        component: <Day2 />,

        text: (
            <>
                <h1>Animated menu button</h1>
                <p>Featuring animated state transition.</p>
            </>
        ),
        path: "/challenges/100-days-css/002"
    },
    {
        component: <Day3 />,
        text: (
            <>
                <h1>Daytime animation</h1>
                <p>
                    Featuring multiple animations combined into infinite loop
                    scene.
                </p>
            </>
        ),
        path: "/challenges/100-days-css/003"
    },
    {
        component: <Day4 />,
        text: (
            <>
                <h1>Pulsing loader</h1>
                <p>Featuring infinite loop loading animation.</p>
            </>
        ),
        path: "/challenges/100-days-css/004"
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
                <h1>Chart</h1>
                <p>Featuring an interactive chart drawn as SVG.</p>
            </>
        ),
        path: "/challenges/100-days-css/005"
    },
    {
        component: <Day6 />,
        text: (
            <>
                <h1>Profile Card</h1>
                <p>Featuring CSS grid and hover animations.</p>
            </>
        ),
        path: "/challenges/100-days-css/006"
    }
];

function App() {
    function switchFrame(frameIdx: number, cardIdx: number) {
        switch (frameIdx) {
            case 0:
                return <>{cards[cardIdx].component}</>;
            case 1:
                return (
                    <>
                        <FetchedText
                            url={`${baseRawUrl}${cards[cardIdx].path}/source.tsx`}
                        >
                            {(text) => (
                                <CodeBlock
                                    code={text?.trim()}
                                    language={"tsx"}
                                    githubUrl={`${baseUrl}${cards[cardIdx].path}/source.tsx`}
                                />
                            )}
                        </FetchedText>
                    </>
                );
            case 2:
                return (
                    <>
                        <FetchedText
                            url={`${baseRawUrl}${cards[cardIdx].path}/source.module.scss`}
                        >
                            {(text) => (
                                <CodeBlock
                                    code={text?.trim()}
                                    language={"sass"}
                                    githubUrl={`${baseUrl}${cards[cardIdx].path}/source.module.scss`}
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
                <h1>Ayron&apos;s Web Portfolio </h1>
                <div className={styles.links}>
                    <a href="https://github.com/AyronK/my-web-moodboard">
                        <GithubLogo size={16} /> My GitHub
                    </a>
                    <a href="https://github.com/AyronK/">
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
                        <li key={c.path}>
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
