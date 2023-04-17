import React from "react";
import { Pause, Play } from "@phosphor-icons/react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day51: React.FC = () => {
    return (
        <Center>
            <div className={styles.container}>
                <input className={styles.checkbox} type="checkbox" />
                <div className={styles.button}>
                    <Pause weight="duotone" size={32} />
                    <Play weight="duotone" size={32} />
                </div>
                <div className={styles.counter}>
                    <div className={styles.digit} />
                    <div className={styles.digit} />
                    <div className={styles.digit} />
                    <div className={styles.digit} />
                </div>
            </div>
        </Center>
    );
};
