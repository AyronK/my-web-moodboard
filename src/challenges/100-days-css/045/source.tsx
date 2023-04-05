import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day45: React.FC = () => {
    return (
        <Center>
            <button className={styles.button}>
                <svg>
                    <rect width="100%" height="100%" />
                </svg>
                Hover me
            </button>
        </Center>
    );
};
