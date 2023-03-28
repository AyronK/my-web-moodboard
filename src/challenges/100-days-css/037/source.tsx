import React from "react";
import styles from "./source.module.scss";

export const Day37: React.FC = () => {
    return (
        <div className={styles.carousel}>
            <div className={styles.card}>
                <div className={styles.header}></div>
                <p>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.header}></div>
                <p>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </p>
            </div>
            <div className={styles.card}>
                <div className={styles.header}></div>
                <p>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </p>
            </div>
        </div>
    );
};
