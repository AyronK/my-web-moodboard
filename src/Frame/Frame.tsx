import React, { PropsWithChildren } from "react";
import styles from "./Frame.module.scss";

export const Frame: React.FC<
    PropsWithChildren & {
        text?: JSX.Element;
        actions?: JSX.Element[];
    }
> = ({ text, actions, children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.frame}>
                <div className={styles.background}>{children}</div>
                {actions && <div className={styles.actions}>{actions}</div>}
            </div>
            {text && <div className={styles.text}>{text}</div>}
        </div>
    );
};

export const Center: React.FC<PropsWithChildren> = ({ children }) => (
    <div className={styles.center}>{children}</div>
);
