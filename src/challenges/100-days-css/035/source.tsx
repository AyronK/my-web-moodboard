import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day35: React.FC = () => {
    return (
        <Center>
            <svg width="128" height="128" className={styles.circle}>
                <circle r="56" cx="64" cy="64" />
                <circle r="56" cx="64" cy="64" />
            </svg>
        </Center>
    );
};
