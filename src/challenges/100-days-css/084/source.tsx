import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day84: React.FC = () => {
    return (
        <Center>
            <div className={styles.book}>
                <div className={styles.title}>
                    <h1>Judge this book</h1>
                    <h2>by its cover</h2>
                </div>
            </div>
        </Center>
    );
};
