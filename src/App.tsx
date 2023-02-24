import React from "react";
import { Frame } from "./challenges/100-days-css/Frame/source";
import { Day1, Day2, Day3, Spinner1 } from "./challenges/100-days-css/index.t";
import styles from "./App.module.scss";

function App() {
    return (
        <>
            <div className={styles.grid}>
                <Frame
                    text={
                        <>
                            <h1>Simple cover</h1>
                            <p>
                                Featuring gradient background with font
                                composition.
                            </p>
                        </>
                    }
                >
                    <Day1 />
                </Frame>
                <Frame
                    text={
                        <>
                            <h1>Animated menu button</h1>
                            <p>Featuring animated state transition.</p>
                        </>
                    }
                >
                    <Day2 />
                </Frame>
                <Frame
                    text={
                        <>
                            <h1>Daytime animation</h1>
                            <p>
                                Featuring multiple animations combined into
                                infinite loop scene.
                            </p>
                        </>
                    }
                >
                    <Day3 />
                </Frame>
                <Frame
                    text={
                        <>
                            <h1>Simple round spinner</h1>
                            <p>Featuring simple rotation animation.</p>
                        </>
                    }
                >
                    <Spinner1 />
                </Frame>
            </div>
        </>
    );
}

export default App;
