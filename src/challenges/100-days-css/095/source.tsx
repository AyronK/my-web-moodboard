import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day95: React.FC = () => {
    return (
        <Center>
            <div className={styles.panda}>
                <div className={styles.head}>
                    <div className={styles.eyes}>
                        <div className={styles.eye + " " + styles.left}><div className={styles.flash} /></div>
                        <div className={styles.eye + " " + styles.right} />
                    </div>
                </div>
                <div className={styles.nose}>
                    <div className={styles.left} />
                    <div className={styles.center} />
                    <div className={styles.right} />
                </div>
                <div className={styles.ear + " " + styles.left} />
                <div className={styles.ear + " " + styles.right} />
            </div>
        </Center>
    );
};

