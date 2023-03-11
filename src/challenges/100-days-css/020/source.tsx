import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day20: React.FC = () => {
    return (
        <Center>
            <div className={styles.container}>
                <div className={styles.background}></div>
                <div className={styles.footer}>
                    <input
                        type="radio"
                        className={styles.radioReset}
                        id="reset"
                        name="action"
                        defaultChecked={true}
                    />
                    <input
                        type="radio"
                        className={styles.radioSend}
                        id="send"
                        name="action"
                    />
                </div>
            </div>
        </Center>
    );
};
