import React from "react";
import styles from "./source.module.scss";

export const Day65: React.FC = () => {
    return (
        <>
            {Array.from({ length: 1 }).map((_, i) => (
                <div key={i} className={styles.ellipse} />
            ))}
        </>
    );
};
