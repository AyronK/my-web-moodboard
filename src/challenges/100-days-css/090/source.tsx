import styles from "./source.module.scss";

export const Day90: React.FC = () => {
    return (
        <div className={styles.container}>
            {Array.from({ length: 400 }).map((_, i) => <div key={i} className={styles.trigger}/>)}
            <div className={styles.lines}>
            {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className={styles.line}>
                    <div className={styles.left}/>
                    <div className={styles.right}/>
                </div>
            ))}
            </div>
        </div>
    );
};

