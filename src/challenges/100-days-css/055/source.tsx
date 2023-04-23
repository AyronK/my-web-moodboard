import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day55: React.FC = () => {
    return (
        <Center>
            <div className={styles.thermostat}>
                <div className={styles.border}></div>
                <div className={styles.square}></div>
                <div className={styles.screen}>
                    <span>23°</span>
                    <div className={styles.first}>
                        <span>
                            19<span>°</span>
                        </span>
                    </div>
                    <div className={styles.second}>
                        <span>
                            20<span>°</span>
                        </span>
                    </div>
                    <span className={styles.room}>Bedroom</span>
                </div>
                <div className={styles.temperature}></div>
                <div className={styles.scale}></div>
            </div>
        </Center>
    );
};
