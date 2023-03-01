import { Heart } from "phosphor-react";
import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day10: React.FC = () => {
    return (
        <Center>
            <div className={styles.frame}>
                <div className={styles.case}>
                    <div className={styles.date}>MON 15 JAN 2022</div>
                    <div className={styles.time}>
                        10:50
                        <div className={styles.seconds}>
                            <div className={styles.tens} />
                            <div className={styles.singles} />
                        </div>
                    </div>
                    <div className={styles.health}>
                        <div className={styles.heartbeat}>
                            <Heart size={12} weight="fill" />
                            81
                        </div>
                        <div className={styles.kcal}>2137 kcal</div>
                    </div>
                </div>
            </div>
        </Center>
    );
};
