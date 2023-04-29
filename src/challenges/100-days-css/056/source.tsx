import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day56: React.FC = () => {
    return (
        <Center>
            <div className={styles.flower}>
                {Array.from({ length: 15 }).map((_, i) => (
                    <div className={styles.petal} key={i} />
                ))}
                <div className={styles.center} />
            </div>
        </Center>
    );
};
