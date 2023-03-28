import { Bell } from "@phosphor-icons/react";
import React from "react";
import styles from "./source.module.scss";

export const Day28: React.FC = () => {
    return (
        <div className={styles.bellContainer}>
            <div className={styles.wobble} />
            <div className={styles.wobble} />
            <div className={styles.wobble} />
            <div className={styles.wobble} />
            <Bell className={styles.bell} size={64} weight="fill" />
        </div>
    );
};
