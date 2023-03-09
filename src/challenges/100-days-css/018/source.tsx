import React from "react";
import styles from "./source.module.scss";

export const Day18: React.FC = () => {
    return (
        <>
            <div className={styles.top}></div>
            <div className={styles.bottom}></div>
            <div className={styles.elastic}>
                <div />
                <div />
            </div>
        </>
    );
};
