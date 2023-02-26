import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

const COLOR_MATRIX = `
1 0 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 20 -10
`;

export const Day8: React.FC = () => {
    return (
        <Center>
            <div className={styles.container}>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <div key={idx} className={styles.liquid}></div>
                ))}
                {Array.from({ length: 16 }).map((_, idx) => (
                    <div key={idx} className={styles.particleContainer}>
                        <div className={styles.particle}></div>
                    </div>
                ))}
            </div>
            <svg>
                <filter id="fluid-filter">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                    <feColorMatrix values={COLOR_MATRIX} />
                </filter>
            </svg>
        </Center>
    );
};
