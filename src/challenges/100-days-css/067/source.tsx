import React from "react";

import styles from "./source.module.scss";

export const Day67: React.FC = () => {
    return (
        <div className={styles.umbrella}>
            <div className={styles.pole} />
            <div className={styles.poleShadow} />
            <div className={styles.top}>
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className={styles.triangle} />
                ))}
            </div>
            <div className={styles.topShadow}>
                <div className={styles.shadow}>
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className={styles.triangle} />
                    ))}
                </div>
            </div>
        </div>
    );
};
