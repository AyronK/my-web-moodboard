import React from "react";
import styles from "./source.module.scss";

export const Day31: React.FC = () => {
    return (
        <div className={styles.container}>
            {Array.from({ length: 40 }).map((_, i) => (
                <span key={i} />
            ))}
        </div>
    );
};
