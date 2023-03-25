import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day34: React.FC = () => {
    return (
        <Center>
            <div className={styles.container}>
                <div className={styles.line} />
                <svg className={styles.text}>
                    <text x="0" y="90%">
                        AYRON
                    </text>
                </svg>
                <div className={styles.line} />
            </div>
        </Center>
    );
};
