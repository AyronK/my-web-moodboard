import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day69: React.FC = () => {
    return (
        <Center>
            <div className={styles.eye}>
                <span />
            </div>
            <div className={styles.top}>
                <svg width="240px" height="106px" viewBox="0 0 240 106">
                    <path
                        d="M239.461093,106 L240,106 L240,0 L0,0 L0,106 L0.538906982,106 C5.9904782,95.5378089 52.3717687,81 120,81 C187.628231,81 234.009522,95.5378089 239.461093,106 Z"
                        className={styles.lid}
                    />
                </svg>
            </div>
            <div className={styles.bottom}>
                <svg width="240px" height="106px" viewBox="0 0 240 106">
                    <path
                        d="M239.461093,106 L240,106 L240,0 L0,0 L0,106 L0.538906982,106 C5.9904782,95.5378089 52.3717687,81 120,81 C187.628231,81 234.009522,95.5378089 239.461093,106 Z"
                        className={styles.lid}
                    />
                </svg>
            </div>
        </Center>
    );
};
