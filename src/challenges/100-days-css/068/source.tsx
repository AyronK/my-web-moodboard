import { Microphone } from "@phosphor-icons/react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day68: React.FC = () => {
    return (
        <Center>
            <div className={styles.recording}>
                <input type="checkbox" />
                <Microphone className={styles.micro} size={56} weight="light" />
                <svg className={styles.circle}>
                    <circle cx={48} cy={48} r={44} />
                </svg>
                <div className={styles.dots}>
                    <div className={styles.dot} />
                    <div className={styles.dot} />
                    <div className={styles.dot} />
                </div>
            </div>
        </Center>
    );
};
