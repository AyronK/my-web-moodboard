import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day75: React.FC = () => {
    return (
        <Center>
            <div className={styles.sphere}>
                {Array.from({length: 12}).map((_, i) => <div key={i} className={styles.circle}/>)}
            </div>
        </Center>
    );
};
