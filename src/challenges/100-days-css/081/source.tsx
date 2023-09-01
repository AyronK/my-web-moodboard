import styles from "./source.module.scss";

export const Day81: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ballContainer}>
                <div className={styles.ballInnerContainer}>
                    <div className={styles.ball} />
                </div>
            </div>
            <div className={styles.floor} />
        </div>
    );
};
