import styles from "./source.module.scss";

export const Day89: React.FC = () => {
    return (
        <div className={styles.container}>
            {Array.from({ length: 100 }).map((_, i) => <div key={i} className={styles.pattern}/>)}
        </div>
    );
};

