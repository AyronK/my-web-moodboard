import React from "react";
import styles from "./source.module.scss";

export const Day63: React.FC = () => {
    return (
        <>
            {Array.from({ length: 72 }).map((_, i) => (
                <div key={i} className={styles.circle} />
            ))}
        </>
    );
};
