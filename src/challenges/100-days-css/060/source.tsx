import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day60: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
                <Center>
                    <div className={styles.text}>Hover</div>
                </Center>
            </div>
        </div>
    );
};
