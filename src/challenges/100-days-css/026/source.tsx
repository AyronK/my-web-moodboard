import React, { useRef, useState } from "react";
import styles from "./source.module.scss";

const items = [
    { title: "Breathe deeply", text: "Breathe in, breathe out. Decompress." },
    { title: "Drink water", text: "Keep yourself hydrated." },
    { title: "Sleep well", text: "Rest, relax, ease your mind." },
    { title: "Take a break", text: "Just five minutes. You deserve it." },
    { title: "Don't overthink", text: "Keep it simple." }
];

export const Day26: React.FC = () => {
    const [current, setCurrent] = useState<number>(0);
    const rendered = useRef<number[]>([]);

    if (!rendered.current.includes(current)) {
        rendered.current.push(current);
    }

    return (
        <div className={styles.cardContainer}>
            {items.map((i, idx) => (
                <div
                    key={idx}
                    className={`${styles.card} ${
                        current === idx
                            ? ""
                            : rendered.current.includes(idx)
                            ? styles.hidden
                            : styles.hiddenNoAnimation
                    }`}
                >
                    <div className={styles.heading}>{i.title}</div>
                    <div className={styles.text}>{i.text}</div>
                    <button
                        className={styles.button}
                        onClick={() =>
                            setCurrent(idx === items.length - 1 ? 0 : idx + 1)
                        }
                    >
                        Ok
                    </button>
                    <div className={styles.bookmark} data-count={idx + 1} />
                </div>
            ))}
        </div>
    );
};
