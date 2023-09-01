import styles from "./source.module.scss";

export const Day83: React.FC = () => {
    return (
        <div className={styles.container}>
            {Array.from({ length: 30 }).map((_, i) => <div className={styles.setOfLines} key={i}>
                <div>
                    {Array.from({ length: 24 }).map((_, i) => <div className={styles.line} key={i} />)}
                </div>
            </div>)}
        </div>
    );
};
