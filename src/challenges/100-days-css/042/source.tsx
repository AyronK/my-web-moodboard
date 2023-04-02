import React from "react";
import styles from "./source.module.scss";

export const Day42: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sky}>
                {Array.from({ length: 300 }).map((_, i) => (
                    <div key={i} className={styles.star}></div>
                ))}
                <div className={styles.shootingStar}></div>
                <div className={styles.shootingStar}></div>
                <div className={styles.shootingStar}></div>
            </div>
        </div>
    );
};
