import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day20: React.FC = () => {
    return (
        <Center>
            <div className={styles.container}>
                <input type="checkbox" className={styles.sendButton} />
                <div className={styles.background}></div>
                <div className={styles.svgContainer}>
                    <svg className={styles.envelope}>
                        <path d="M 120,25 0,25 60,70 120,25" />
                        <path d="M 0,25 0,95 120,95 120,25" />
                    </svg>
                </div>
            </div>
        </Center>
    );
};
