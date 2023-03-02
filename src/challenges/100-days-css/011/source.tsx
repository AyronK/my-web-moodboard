import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day11: React.FC = () => {
    return (
        <Center>
            <div className={styles.person}>
                <div className={styles.left + " " + styles.leg}>
                    <div className={styles.shoe}></div>
                </div>
                <div className={styles.right + " " + styles.leg}>
                    <div className={styles.shoe}></div>
                </div>
            </div>
        </Center>
    );
};
