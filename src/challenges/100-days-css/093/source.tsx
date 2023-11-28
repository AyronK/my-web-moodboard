import styles from "./source.module.scss";

export const Day93: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}></div>
            <div className={styles.bottom}>
                <div className={styles.inner}>
                    <div className={styles.lines}>
                        {Array.from({ length: 40 }).map((_, i) => <div key={i} className={styles.line} />)}
                    </div>
                    <div className={styles.center}></div>
                </div>
            </div>
        </div>
    );
};

