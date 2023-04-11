import React from "react";
import styles from "./source.module.scss";

export const Day49: React.FC = () => {
    return (
        <div className={styles.board}>
            {Array.from({ length: 12 * 12 }).map((_, i) => (
                <div />
            ))}
            <div className={styles.pulsar} />
            <div className={styles.track1} />
            <div className={styles.track2} />
            <div className={styles.track3} />
        </div>
    );
};
