import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day3 = () => (
    <Center>
        <div className={styles.container}>
            <div className={styles.sky}></div>
            <div className={styles.pyramidShadow}></div>
            <div className={styles.pyramidFront}></div>
            <div className={styles.pyramidSide}></div>
            <div className={styles.sand}></div>
            <div className={styles.starsContainer}>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
            </div>
            <div className={styles.sunContainer}>
                <div className={styles.sun}></div>
            </div>
            <div className={styles.cloudsContainer}>
                <div className={styles.cloud}></div>
                <div className={styles.cloud}></div>
            </div>
        </div>
    </Center>
);
