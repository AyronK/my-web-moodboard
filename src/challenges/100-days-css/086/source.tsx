import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day86: React.FC = () => {
    return (
        <Center>
            <div className={styles.cradle}>
                <div className={styles.ball}/>
                <div className={styles.ball}/>
                <div className={styles.ball}/>
                <div className={styles.ball}/>
                <div className={styles.ball}/>
            </div>
        </Center>
    );
};
