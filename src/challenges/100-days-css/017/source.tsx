import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day17: React.FC = () => {
    return (
        <Center>
            <div>
                <svg className={styles.polygon}>
                    <polygon
                        className={styles.middle}
                        points="68,0 91,0 160,117 46,117 59,93 121,93"
                    />
                    <polygon
                        className={styles.dark}
                        points="68,41 79,59 46,117 160,117 147,160 11,140"
                    />
                    <polygon
                        className={styles.light}
                        points="0,117 68,0 121,93 98,93 68,41 11,140"
                    />
                </svg>
            </div>
        </Center>
    );
};
