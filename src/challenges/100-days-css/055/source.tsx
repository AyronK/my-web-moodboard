import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day55: React.FC = () => {
    return (
        <Center>
            <div className={styles.thermostat}>
                <div className={styles.border}></div>
                <div className={styles.temperature}></div>
            </div>
        </Center>
    );
};
