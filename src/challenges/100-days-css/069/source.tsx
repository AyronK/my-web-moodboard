import styles from "./source.module.scss";

const Eye: React.FC = () => {
    return (
        <>
            <div className={styles.eye}>
                <div className={styles.ball}>
                    <div className={styles.iris} />
                </div>
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
        </>
    );
};

export const Day69: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.eyes}>
                <div>
                    <Eye />
                </div>
                <div>
                    <Eye />
                </div>
            </div>
        </div>
    );
};
