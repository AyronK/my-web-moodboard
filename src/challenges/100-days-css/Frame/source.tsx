import React, { PropsWithChildren } from "react";
import styles from "./source.module.scss";

export const Frame: React.FC<PropsWithChildren & { text?: JSX.Element }> = ({
    text,
    children
}) => (
    <div className={styles.container}>
        <div className={styles.frame}>
            <div className={styles.background}>
                <div className={styles.center}>{children}</div>
            </div>
        </div>
        {text && <div className={styles.text}>{text}</div>}
    </div>
);
