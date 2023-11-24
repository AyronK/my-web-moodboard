import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day91: React.FC = () => {
    return (
        <Center>
            <div className={styles.cube}>
                <div className={styles.side + " " + styles.top}/>
                <div className={styles.side + " " + styles.bottom} />
                <div className={styles.side + " " + styles.left}/>
                <div className={styles.side + " " + styles.right} />
                <div className={styles.side + " " + styles.front}/>
                <div className={styles.side + " " + styles.back}/>
                <div className={styles.side + " " + styles.topFill}/>
            </div>
        </Center>
    );
};

