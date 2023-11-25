import styles from "./source.module.scss";

export const Day92: React.FC = () => {
    return (
        <div className={styles.container}>
            {Array.from({ length: 16 }).map((_, i) => <div className={styles.point} key={i} />)}
        </div>
    );
};

