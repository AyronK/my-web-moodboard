import React, { useEffect, useState } from "react";
import styles from "./source.module.scss";

export const Day33: React.FC = () => {
    return (
        <div className={styles.card}>
            <div className={styles.sky} />
            <div className={styles.clouds}>
                <div className={styles.cloud}></div>
                <div className={styles.cloud}></div>
                <div className={styles.cloud}></div>
            </div>
            <div className={styles.sun} />
        </div>
    );
};
