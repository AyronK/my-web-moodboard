import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day79: React.FC = () => {
    return (
        <Center>
            {Array.from({ length: 10 }).map((_, i) => 
                <div key={i} className={styles.line}/>
            )}
        </Center> 
    );
};
