import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day22: React.FC = () => {
    return (
        <div className={styles.container}>
            <div>
                <h1>
                    YOUR DAILY{"\n"}
                    PROGRESS
                </h1>
            </div>
            <div>
                <div
                    className={styles.progress}
                    style={{ "--progress": 2758 / 3200 } as React.CSSProperties}
                >
                    <span className={styles.value}>2758</span>
                    <span className={styles.unit}>kcal</span>
                </div>
            </div>
            <div
                className={styles.progressSmall}
                style={{ "--progress": 8563 / 12000 } as React.CSSProperties}
            >
                <span className={styles.value}>8563</span>
                <span className={styles.unit}>steps</span>
            </div>
            <div
                className={styles.progressSmall}
                style={{ "--progress": 6.2 / 15 } as React.CSSProperties}
            >
                <span className={styles.value}>6,2</span>
                <span className={styles.unit}>km</span>
            </div>
        </div>
    );
};
