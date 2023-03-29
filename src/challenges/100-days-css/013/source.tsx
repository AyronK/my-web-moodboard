import {
    FacebookLogo,
    LinkedinLogo,
    TwitterLogo,
    UserFocus,
    X
} from "@phosphor-icons/react";
import React, { useState } from "react";
import styles from "./source.module.scss";

export const Day13: React.FC = () => {
    const [visible, setVisible] = useState<number | null>(null);
    return (
        <div className={styles.grid}>
            {Array.from({ length: 4 }).map((_, i) => {
                const image =
                    i === 0
                        ? "https://media.licdn.com/dms/image/C4E03AQGnk-aU9R93AA/profile-displayphoto-shrink_200_200/0/1653306197074?e=1683158400&v=beta&t=gTzrfYClNRsVkafXCEp5um1mNHq8DB2HTy2NhixandI"
                        : `https://loremflickr.com/200/200/people?lock=${
                              i * 5 + (i - 1) * 20
                          }.jpg`;
                return (
                    <div key={i}>
                        <div className={styles.tile}>
                            <img src={image}></img>
                            <div
                                className={styles.overlay}
                                onClick={() => setVisible(i)}
                                role="button"
                            ></div>
                            <div className={styles.button}>
                                <UserFocus size={24} weight="bold" />
                            </div>
                        </div>
                        <div
                            className={
                                styles.drawer +
                                (visible === i ? " " + styles.visible : "")
                            }
                        >
                            <div className={styles.top}></div>
                            <div className={styles.photo}>
                                <img src={image}></img>
                            </div>
                            <div className={styles.bottom}>
                                <div className={styles.name}>
                                    {i === 0
                                        ? "Marcin Kotlicki"
                                        : "Random Name"}
                                </div>
                                <div className={styles.socials}>
                                    <button className={styles.button}>
                                        <LinkedinLogo
                                            size={24}
                                            color="currentColor"
                                        />
                                    </button>
                                    <button className={styles.button}>
                                        <FacebookLogo size={24} />
                                    </button>
                                    <button className={styles.button}>
                                        <TwitterLogo size={24} />
                                    </button>
                                </div>
                            </div>
                            <button
                                className={styles.closeButton}
                                onClick={() => setVisible(null)}
                            >
                                <X size={24} weight="bold" />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
