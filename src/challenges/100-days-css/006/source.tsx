import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day6: React.FC = () => (
    <Center>
        <div className={styles.card}>
            <div className={styles.grid}>
                <div className={styles.left}>
                    <div className={styles.bio}>
                        <div className={styles.avatar}>
                            <img
                                src="https://avatars.githubusercontent.com/u/26150059?s=400&u=dffa27d1aedc4c58e0d1f5c1254e764cfadc3201&v=4"
                                alt="avatar"
                            />
                        </div>
                        <div className={styles.name}>
                            <span>Marcin Kotlicki</span>
                            <span>Software Developer</span>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button>Follow</button>
                        <button>Message</button>
                    </div>
                </div>
                <button className={styles.sideButton}>
                    <span>523</span>
                    <span>Posts</span>
                </button>
                <button className={styles.sideButton}>
                    <span>1387</span>
                    <span>Likes</span>
                </button>
                <button className={styles.sideButton}>
                    <span>146</span>
                    <span>Followers</span>
                </button>
            </div>
        </div>
    </Center>
);
