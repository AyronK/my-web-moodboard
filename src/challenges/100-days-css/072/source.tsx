import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day72: React.FC = () => {
    return (
        <Center>
            {...Array(36)
                .fill(0)
                .map((_, i) => <div className={styles.ring} key={i} />)}
        </Center>
    );
};
