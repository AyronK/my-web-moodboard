import React from "react";
import styles from "./source.module.scss";

export const Day65: React.FC = () => {
    return (
        <div className={styles.container}>
            {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className={styles.ellipseContainer}>
                    <div key={i} className={styles.ellipse} />
                </div>
            ))}
        </div>
    );
};
