import { SpeakerSimpleHigh } from "phosphor-react";
import React from "react";
import styles from "./source.module.scss";

export const Day12: React.FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.quote}>
                I know quite certainly that I myself have no special talent;
                curiosity,{" "}
                <span className={styles.tooltip}>
                    <span className={styles.tooltipBody}>
                        <span className={styles.tooltipHeader}>
                            [əbˈseʃ(ə)n]
                            <button className={styles.speaker}>
                                <SpeakerSimpleHigh
                                    size={16}
                                    weight="duotone"
                                    color="currentColor"
                                />
                            </button>
                        </span>
                        <span className={styles.tooltipContent}>
                            Obsession, a persistent disturbing preoccupation
                            with an often unreasonable idea or feeling.
                        </span>
                    </span>
                    obsession
                </span>{" "}
                and dogged endurance, combined with self-criticism have brought
                me to my ideas.
            </p>
            <span className={styles.author}>Albert Einstein</span>
        </div>
    );
};
