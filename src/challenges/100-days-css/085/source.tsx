import styles from "./source.module.scss";

export const Day85: React.FC = () => {
    return (
        <>
            {Array.from({length: 100}).map((_, i) => <div key={i} className={styles.dot}/>)}
        </>
    );
};
