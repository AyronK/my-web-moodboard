import { Check } from "phosphor-react";
import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day24: React.FC = () => {
    return (
        <Center>
            <span className={styles.buttonWrapper}>
                <input type="checkbox" />
                <span className={styles.button} />
                <svg className={styles.lines}>
                    <path d="M 0,25 75,25 98,25 Q 98,2 75,2 52,2 52,25"></path>
                    <path d="M 150,25 75,25 52,25 Q 52,48 75,48 98,48 98,25"></path>
                </svg>
                <Check size={32} className={styles.check} />
            </span>
        </Center>
    );
};
