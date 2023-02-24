import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day2 = () => (
    <Center>
        <div className={styles.menuIcon}>
            <input className={styles.radio} type="radio" name="menuIcon" />
            <input className={styles.radio} type="radio" name="menuIcon" />
            <div className={styles.button}>
                <div className={styles.bar + " " + styles.barTop}></div>
                <div className={styles.bar + " " + styles.barMiddle}></div>
                <div className={styles.bar + " " + styles.barBottom}></div>
                <div className={styles.bar + " " + styles.barTopCover}></div>
            </div>
        </div>
    </Center>
);
