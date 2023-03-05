import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day16: React.FC = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.circleIn} />
            </div>
            <div className={styles.container}>
                <div className={styles.octagon} />
            </div>
            <div className={styles.container}>
                <div className={styles.triangle} />
            </div>
            <div className={styles.container}>
                <div className={styles.circleOut} />
            </div>
        </>
    );
};
