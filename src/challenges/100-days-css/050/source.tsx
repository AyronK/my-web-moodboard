import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day50: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.x}>
                <div className={styles.xScale}>
                    <div className={styles.y}>
                        <div className={styles.yScale}>
                            <div className={styles.ball}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
