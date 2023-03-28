import React from "react";
import { GithubLogo } from "phosphor-react";
import styles from "./source.module.scss";

export const Day38: React.FC = () => {
    return (
        <div className={styles.container}>
            <input type={"checkbox"} />
            <div className={styles.logo1}>
                <GithubLogo weight="fill" />
            </div>
            <div className={styles.logo2}>
                <GithubLogo weight="fill" />
            </div>
        </div>
    );
};
