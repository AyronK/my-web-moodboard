import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day57: React.FC = () => {
    return (
        <Center>
            <div className={styles.container}>
                <div className={styles.icosahedron}>
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div className={styles.triangle} key={i} />
                    ))}
                </div>
            </div>
        </Center>
    );
};
