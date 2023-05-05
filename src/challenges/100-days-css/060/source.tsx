import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day60: React.FC = () => {
    return (
        <div className={styles.container}>
            {Array.from({ length: 200 }).map((_, i) => (
                <div className={styles.trigger} key={i}></div>
            ))}
            <Center>
                <div className={styles.text}>Hover</div>
            </Center>
            <div className={styles.overlay}>
                <Center>
                    <div className={styles.text}>Hover</div>
                </Center>
            </div>
        </div>
    );
};
