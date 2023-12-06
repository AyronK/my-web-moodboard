import styles from "./source.module.scss";

export const Day98: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.top} />
                <div className={styles.bottom} />
                <div className={styles.right} />
                <div className={styles.left} />
            </div>
        </div>
    );
};

