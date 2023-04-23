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
                    <span>23</span>
                    <div>
                        <span>19</span>
                        <span>20</span>
                    </div>
                    <div>
                        <span>Bedroom</span>
                        <span>Kitchen</span>
                    </div>
                </div>
                <div className={styles.temperature}></div>
            </div>
        </Center>
    );
};
