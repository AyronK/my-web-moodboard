import styles from "./source.module.scss";

export const Day98: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.top} />
                <div className={styles.bottom} />
                <div className={styles.right} />
                <div className={styles.left} />
            </div>
            <div className={styles.items}>
                <div className={`${styles.items__square} ${styles["items__square--1"]} ${styles.small} ${styles.color1}`}></div>
                <div className={`${styles.items__square} ${styles["items__square--2"]} ${styles.big} ${styles.color2}`}></div>
                <div className={`${styles.items__square} ${styles["items__square--3"]} ${styles.color1}`}></div>
                <div className={`${styles.items__square} ${styles["items__square--4"]} ${styles.small} ${styles.color3}`}></div>
                <div className={`${styles.items__square} ${styles["items__square--5"]} ${styles.color1}`}></div>
                <div className={`${styles.items__square} ${styles["items__square--6"]} ${styles.big} ${styles.color1}`}></div>
                <div className={`${styles.items__square} ${styles["items__square--7"]} ${styles.color3}`}></div>
                <div className={`${styles.items__square} ${styles["items__square--8"]} ${styles.small} ${styles.color3}`}></div>

                <div className={`${styles.items__circle} ${styles["items__circle--1"]} ${styles.small} ${styles.color1}`}></div>
                <div className={`${styles.items__circle} ${styles["items__circle--2"]} ${styles.color2}`}></div>
                <div className={`${styles.items__circle} ${styles["items__circle--3"]} ${styles.small} ${styles.color3}`}></div>
                <div className={`${styles.items__circle} ${styles["items__circle--4"]} ${styles.big} ${styles.color1}`}></div>
                <div className={`${styles.items__circle} ${styles["items__circle--5"]} ${styles.color3}`}></div>
                <div className={`${styles.items__circle} ${styles["items__circle--6"]} ${styles.small} ${styles.color2}`}></div>
                <div className={`${styles.items__circle} ${styles["items__circle--7"]} ${styles.color1}`}></div>
                <div className={`${styles.items__circle} ${styles["items__circle--8"]} ${styles.small} ${styles.color3}`}></div>
            </div>

        </div>
    );
};

