import React from "react";
import styles from "./source.module.scss";

export const Day52: React.FC = () => {
    return Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className={styles.circle}>
            {Array.from({ length: 60 + 4 * i }).map((_, j) => (
                <div key={j} className={styles.dot} />
            ))}
        </div>
    ));
};
