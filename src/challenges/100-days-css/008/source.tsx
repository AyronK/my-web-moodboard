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
                <div className={styles.blobs}>
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <div key={idx} className={styles.liquid}></div>
                    ))}
                </div>
                <div className={styles.particles}>
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <div key={idx} className={styles.particleContainer}>
                            <div className={styles.particle}></div>
                        </div>
                    ))}
                </div>
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
