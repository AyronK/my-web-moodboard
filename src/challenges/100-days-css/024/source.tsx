import { Check } from "@phosphor-icons/react";
import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

// formula for perfect circle svg path
// aR R 0 1 1 - (R * 2) 0
// aR R 0 1 1 (R * 2) 0

export const Day24: React.FC = () => {
    return (
        <Center>
            <span className={styles.buttonWrapper}>
                <input type="checkbox" />
                <span className={styles.button} />
                <svg className={styles.lines}>
                    <path d="M 0,25 75,25 98,25 a23 23 0 1 1 -46 0" />
                    <path d="M 150,25 75,25 52,25  a23 23 0 1 1 46 0" />
                </svg>
                <Check size={32} className={styles.check} />
            </span>
        </Center>
    );
};
