import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day88: React.FC = () => {
    return (
        <Center>
            <div className={styles.candle}/>
            <div className={styles.plate}/>
            <div className={styles.wick}/>
            <div className={styles.flame}/>
        </Center>
    );
};

