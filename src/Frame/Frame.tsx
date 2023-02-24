import React, { PropsWithChildren } from "react";
import styles from "./Frame.module.scss";

export const Frame: React.FC<
    PropsWithChildren & {
        text?: JSX.Element;
        actions?: JSX.Element[];
        overflow?: boolean;
    }
> = ({ text, actions, children, overflow }) => {
    return (
        <div className={styles.container}>
            <div className={styles.frame}>
                <div
                    className={
                        overflow ? styles.backgroundOverflow : styles.background
                    }
                >
                    {children}
                </div>
                {actions && <div className={styles.actions}>{actions}</div>}
            </div>
            {text && <div className={styles.text}>{text}</div>}
        </div>
    );
};

export const Center: React.FC<PropsWithChildren> = ({ children }) => (
    <div className={styles.center}>{children}</div>
);
