import { SpeakerSimpleHigh } from "@phosphor-icons/react";
import React from "react";
import styles from "./source.module.scss";

export const Day12: React.FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.quote}>
                A man is what he has{" "}
                <span className={styles.tooltip}>
                    <span className={styles.tooltipBody}>
                        <span className={styles.tooltipHeader}>
                            [/ˈpæʃ.ən/]
                            <button className={styles.speaker}>
                                <SpeakerSimpleHigh
                                    size={16}
                                    weight="duotone"
                                    color="currentColor"
                                />
                            </button>
                        </span>
                        <span className={styles.tooltipContent}>
                            A true desire sustained or prolonged; Any great,
                            strong, powerful emotion, especially romantic love
                            or extreme hate.
                        </span>
                    </span>
                    passion
                </span>{" "}
                about. If you give up what you want most for what you think you
                should want more, you&apos;ll end up miserable.
            </p>
            <span className={styles.author}>Brandon Sanderson</span>
        </div>
    );
};
