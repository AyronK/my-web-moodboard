import styles from "./source.module.scss";

export const Day79: React.FC = () => {
    return (
        <div>
            {Array.from({ length: 10 }).map((_, i) => 
                <div key={i} className={styles.line}/>
            )}
        </div> 
    );
};
