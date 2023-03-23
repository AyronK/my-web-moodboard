import React, { useEffect, useState } from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day32: React.FC = () => {
    const [value, setValue] = useState<number>(0);
    const digits = value.toString().padStart(3, "0");
    useEffect(() => {
        if (value < 0) {
            setValue(0);
        }
    }, [value]);
    return (
        <Center>
            <div className={styles.counter}>
                <button
                    className={styles.button}
                    onClick={() => setValue((v) => --v)}
                >
                    -
                </button>
                <span className={styles.digitWrapper}>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span
                            key={i}
                            className={
                                styles.digit +
                                " " +
                                (digits[0] === i.toString()
                                    ? styles.visible
                                    : "")
                            }
                        >
                            {i}
                        </span>
                    ))}
                </span>
                <span className={styles.digitWrapper}>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span
                            key={i}
                            className={
                                styles.digit +
                                " " +
                                (digits[1] === i.toString()
                                    ? styles.visible
                                    : "")
                            }
                        >
                            {i}
                        </span>
                    ))}
                </span>
                <span className={styles.digitWrapper}>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span
                            key={i}
                            className={
                                styles.digit +
                                " " +
                                (digits[2] === i.toString()
                                    ? styles.visible
                                    : "")
                            }
                        >
                            {i}
                        </span>
                    ))}
                </span>
                <button
                    className={styles.button}
                    onClick={() => setValue((v) => ++v)}
                >
                    +
                </button>
            </div>
        </Center>
    );
};
