import React from "react";
import styles from "./source.module.scss";

export const Day23: React.FC = () => {
    return (
        <div className={styles.textContainer}>
            <svg className={styles.lines}>
                <circle
                    className={styles.blob}
                    cx="200"
                    cy="200"
                    r="10"
                    fill="currentColor"
                />
                <polyline className={styles.line} points="80,235 190,202.5" />
                <polyline className={styles.line} points=" 300,170 190,202.5" />
                <polyline
                    className={styles.bracket}
                    points="80,235 50,235 50,170 160,170"
                />
                <polyline
                    className={styles.bracket}
                    points="300,170 350,170 350,235 240,235"
                />
            </svg>
            <h1>
                <span className={styles.topText}>Branch</span>
                <span className={styles.centerText}>company</span>
                <span className={styles.bottomText}>Industry</span>
            </h1>
        </div>
    );
};
