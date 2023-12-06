import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day97: React.FC = () => {
    return (
        <Center>
            <div className={styles.man}>
                <div className={styles.head} />
                <div className={styles.body}>
                    <div className={styles.arm + " " +  styles.left}>
                        <div className={styles.upper}>
                            <div className={styles.lower} />
                        </div>
                    </div>
                    <div className={styles.arm + " " + styles.right}>
                        <div className={styles.upper}>
                            <div className={styles.lower} />
                        </div>
                    </div>
                    <div className={styles.leg + " " +  styles.left}>
                        <div className={styles.upper}>
                            <div className={styles.lower} />
                        </div>
                    </div>
                    <div className={styles.leg + " " +  styles.right}>
                        <div className={styles.upper}>
                            <div className={styles.lower} />
                        </div>
                    </div>
                </div>
            </div>
        </Center>
    );
};

