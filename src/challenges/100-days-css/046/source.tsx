import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day46: React.FC = () => {
    return (
        <Center>
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={styles.ring}>
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className={styles.dot} />
                    ))}
                </div>
            ))}
        </Center>
    );
};
