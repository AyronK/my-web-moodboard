import React from "react";
import styles from "./source.module.scss";

export const Day19: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.slider}>
                <input
                    className={styles.radio}
                    type="radio"
                    name="slider"
                    id="slider1"
                    defaultChecked
                />
                <input
                    className={styles.radio}
                    type="radio"
                    name="slider"
                    id="slider2"
                />
                <input
                    className={styles.radio}
                    type="radio"
                    name="slider"
                    id="slider3"
                />
                <div className={styles.background} />
                <div className={styles.checked} />
            </div>
        </div>
    );
};
