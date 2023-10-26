import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day87: React.FC = () => {
    return (
        <Center>
        <div className={styles.emerald}>
            <div className={styles.bottomLeft}/>
            <div className={styles.bottomRight}/>
            <div className={styles.bottomMiddle}/>
            <div className={styles.topMostLeft}/>
            <div className={styles.topLeft}/>
            <div className={styles.topMiddle}/>
            <div className={styles.topRight}>
                <div className={styles.shine}/>
            </div>
            <div className={styles.topMostRight}/>
        </div>
        </Center>
    );
};

