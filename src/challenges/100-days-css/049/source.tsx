import React from "react";
import styles from "./source.module.scss";

export const Day49: React.FC = () => {
    return (
        <div className={styles.board}>
            {Array.from({ length: 50 * 50 }).map((_, i) => (
                <div />
            ))}
            <div className={styles.pulsar} />
        </div>
    );
};
