import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day4 = () => (
    <Center>
        <div>
            <div className={styles.circleWrapper}>
                <div className={styles.circle + " " + styles.first}></div>
            </div>
            <div className={styles.circleWrapper}>
                <div className={styles.circle + " " + styles.second}></div>
            </div>
            <div className={styles.circleWrapper}>
                <div className={styles.circle + " " + styles.third}></div>
            </div>
        </div>
    </Center>
);
