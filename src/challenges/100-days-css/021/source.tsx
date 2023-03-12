import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day21: React.FC = () => {
    return (
        <Center>
            <div className={styles.container}>
                <svg className={styles.pacman}>
                    <circle cx="50" cy="50" r="25"></circle>
                </svg>
                <svg className={styles.eye}>
                    <circle cx="6" cy="6" r="6"></circle>
                </svg>
                <svg className={styles.dots}>
                    <polyline points="0,7 240,7"></polyline>
                </svg>
            </div>
        </Center>
    );
};
