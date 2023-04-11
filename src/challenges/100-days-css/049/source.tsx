import React from "react";
import styles from "./source.module.scss";

export const Day49: React.FC = () => {
    return (
        <div className={styles.board}>
            {Array.from({ length: 20 * 20 }).map((_, i) => (
                <div />
            ))}
            <div className={styles.pulsar} />
        </div>
    );
};
