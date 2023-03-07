import React from "react";
import styles from "./source.module.scss";

export const Day16: React.FC = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.circleIn} />
                <div className={styles.wobble} />
            </div>
            <div className={styles.container}>
                <div className={styles.octagon} />
                <div className={styles.wobble} />
            </div>
            <div className={styles.container}>
                <div className={styles.triangle} />
                <div className={styles.wobble} />
            </div>
            <div className={styles.container}>
                <div className={styles.circleOut} />
                <div className={styles.wobble} />
            </div>
        </>
    );
};
