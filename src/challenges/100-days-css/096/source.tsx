import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day96: React.FC = () => {
    return (
        <Center>
            <div className={styles.down}>
                <div className={styles.up}>
                    <div className={styles.squeeze}>
                        <div className={styles.rotate1}>
                            <div className={styles.rotate2}>
                                <div className={styles.marshmallow} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.shadow} />
        </Center>
    );
};

