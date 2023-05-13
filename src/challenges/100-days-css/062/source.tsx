import React from "react";
import styles from "./source.module.scss";

const Plan: React.FC<{ name: string; price: number }> = ({ name, price }) => {
    return (
        <div className={styles.plan}>
            <div className={styles.name}>{name}</div>
            <div className={styles.body}>
                <div>
                    <div className={styles.price}>{price}$</div>
                    <div className={styles.time}>per month</div>
                </div>
                <div className={styles.placeholder}>
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </div>
    );
};

export const Day62: React.FC = () => {
    return (
        <div className={styles.dashboard}>
            <Plan name="Basic" price={5} />
            <Plan name="Pro" price={10} />
            <Plan name="Enterprise" price={50} />
            <div className={styles.quotas}>
                <div className={styles.quota}>
                    <div>
                        <span>1 User</span>
                        <span>100 Users</span>
                    </div>
                    <div className={styles.bar} />
                </div>
                <div className={styles.quota}>
                    <div>
                        <span>1 GB</span>
                        <span>500 GB</span>
                    </div>
                    <div className={styles.bar} />
                </div>
                <div className={styles.quota}>
                    <div>
                        <span>1 Project</span>
                        <span>50 Projects</span>
                    </div>
                    <div className={styles.bar} />
                </div>
            </div>
        </div>
    );
};
