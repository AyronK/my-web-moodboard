import React from "react";
import { Day1, Day2, Day3, Spinner1 } from "./challenges/100-days-css/index.t";

function App() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 32,
                overflow: "auto",
                position: "relative",
                height: "100vh",
                padding: 128
            }}
        >
            <h1>Ayron&apos;s Web Portfolio</h1>
            <div style={{ position: "relative", minHeight: 400 }}>
                <Day1 />
            </div>
            <div style={{ position: "relative", minHeight: 400 }}>
                <Day2 />
            </div>
            <div style={{ position: "relative", minHeight: 400 }}>
                <Day3 />
            </div>
            <div style={{ position: "relative", minHeight: 400 }}>
                <Spinner1 />
            </div>
        </div>
    );
}

export default App;
