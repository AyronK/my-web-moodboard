import React from "react";
import styles from "./source.module.scss";

export const Day44: React.FC = () => {
    return (
        <div className={styles.container}>
            {Array.from({ length: 15 }).map((_, i) => (
                <div className={styles.rect} key={i} />
            ))}
        </div>
    );
};
