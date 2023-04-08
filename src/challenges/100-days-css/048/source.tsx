import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day48: React.FC = () => {
    return (
        <Center>
            <div className={styles.cube}>
                <div className={styles.top}></div>
                <div className={styles.bottom}></div>
                <div className={styles.left}></div>
                <div className={styles.right}></div>
                <div className={styles.front}></div>
                <div className={styles.back}></div>
            </div>
        </Center>
    );
};
