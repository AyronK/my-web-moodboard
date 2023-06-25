import styles from "./source.module.scss";

export const Day71: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.keyboard}>
                <div className={styles.row}>
                    <div className={styles.key}>1</div>
                    <div className={styles.key}>2</div>
                    <div className={styles.key}>3</div>
                    <div className={styles.key}>4</div>
                    <div className={styles.key}>5</div>
                    <div className={styles.key}>6</div>
                    <div className={styles.key}>7</div>
                    <div className={styles.key}>8</div>
                    <div className={styles.key}>9</div>
                    <div className={styles.key}>0</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.key}>q</div>
                    <div className={styles.key}>w</div>
                    <div className={styles.key}>e</div>
                    <div className={styles.key}>r</div>
                    <div className={styles.key}>t</div>
                    <div className={styles.key}>y</div>
                    <div className={styles.key}>u</div>
                    <div className={styles.key}>i</div>
                    <div className={styles.key}>o</div>
                    <div className={styles.key}>p</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.key}>a</div>
                    <div className={styles.key}>s</div>
                    <div className={styles.key}>d</div>
                    <div className={styles.key}>f</div>
                    <div className={styles.key}>g</div>
                    <div className={styles.key}>h</div>
                    <div className={styles.key}>j</div>
                    <div className={styles.key}>k</div>
                    <div className={styles.key}>l</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.key}>z</div>
                    <div className={styles.key}>x</div>
                    <div className={styles.key}>c</div>
                    <div className={styles.key}>v</div>
                    <div className={styles.key}>b</div>
                    <div className={styles.key}>n</div>
                    <div className={styles.key}>m</div>
                </div>
            </div>
        </div>
    );
};
