import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day73: React.FC = () => {
    return (
        <Center>
            <div className={styles.text}>
                I'm a&nbsp;
                <div>
                    <span>Leopard</span>
                    <span>Tiger</span>
                    <span>Panther</span>
                    <span>Jaguar</span>
                </div>
            </div>
        </Center>
    );
};
