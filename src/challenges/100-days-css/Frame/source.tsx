import React, { PropsWithChildren } from "react";
import styles from "./source.module.scss";

export const Frame: React.FC<PropsWithChildren> = ({ children }) => (
    <div className={styles.frame}>
        <div className={styles.background}>
            <div className={styles.center}>{children}</div>
        </div>
    </div>
);
