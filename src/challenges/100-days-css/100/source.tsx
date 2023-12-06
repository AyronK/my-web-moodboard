import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day100: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.e}>
                <div className={styles.eLeft}></div>
                <div className={styles.eTop}></div>
                <div className={styles.eBottom}></div>
                <div className={styles.eMid}></div>
            </div>
            <div className={styles.n}>
                <div className={styles.nLeft}></div>
                <div className={styles.nRight}></div>
                <div className={styles.nMid}></div>
            </div>
            <div className={styles.d}>
                <div className={styles.dLeft} />
                <div className={styles.dRight}>
                    <div className={styles.circleContainer}>
                        <div className={styles.circle} />
                    </div>
                    <div className={styles.topDotContainer}>
                        <div className={styles.dot} />
                    </div>
                    <div className={styles.bottomDotContainer}>
                        <div className={styles.dot} />
                    </div>
                </div>
            </div>
            <div className={styles.o}>
                <div className={styles.oLeft}>
                    <div className={styles.circleContainer}>
                        <div className={styles.circle} />
                    </div>
                    <div className={styles.topDotContainer}>
                        <div className={styles.dot} />
                    </div>
                    <div className={styles.bottomDotContainer}>
                        <div className={styles.dot} />
                    </div>
                </div>
                <div className={styles.oRight}>
                    <div className={styles.circleContainer}>
                        <div className={styles.circle} />
                    </div>
                    <div className={styles.topDotContainer}>
                        <div className={styles.dot} />
                    </div>
                    <div className={styles.bottomDotContainer}>
                        <div className={styles.dot} />
                    </div>
                </div>
            </div>
        </div>
    );
};

