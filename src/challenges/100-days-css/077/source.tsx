import styles from "./source.module.scss";

export const Day77: React.FC = () => {
    return (
        <div className={styles.container}>
            {Array.from({length: 5}).map((_, i) => <div key={i} className={styles.ball} />)}            
        </div> 
    );
};
