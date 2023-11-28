import styles from "./source.module.scss";

export const Day94: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tree}>
                <div className={styles.leafs}></div>
                <div className={styles.trunk}>
                    <div className={styles.branch}></div>
                    <div className={styles.branch}></div>
                    <div className={styles.branch}></div>
                    <div className={styles.branch}></div>
                    <div className={styles.branch}></div>
                </div>
            </div>
        </div>
    );
};

