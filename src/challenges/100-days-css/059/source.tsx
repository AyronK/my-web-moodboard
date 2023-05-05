import React from "react";
import styles from "./source.module.scss";

export const Day59: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}></div>
            <div className={styles.image}>
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className={styles.stripe}></div>
                ))}
                <div className={styles.textContainer}>
                    <div className={styles.text}>Slice</div>
                    <div className={styles.text}>transition</div>
                </div>
            </div>
        </div>
    );
};
