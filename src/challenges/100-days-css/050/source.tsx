import React from "react";
import styles from "./source.module.scss";

export const Day50: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.y}>
                <div className={styles.yScale}>
                    <div className={styles.ball} />
                </div>
            </div>
            <div className={styles.shadow} />
        </div>
    );
};
