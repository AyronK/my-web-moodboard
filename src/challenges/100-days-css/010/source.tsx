import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day10: React.FC = () => {
    return (
        <Center>
            <div className={styles.frame}>
                <div className={styles.case}>
                    <div className={styles.hours}>10</div>
                    <div className={styles.minutes} />
                    <div className={styles.seconds}>
                        <div className={styles.tens} />
                        <div className={styles.singles} />
                    </div>
                </div>
            </div>
        </Center>
    );
};
