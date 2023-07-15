import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day74: React.FC = () => {
    return (
        <Center>
            <div className={styles.pagination}>
                <div>    
                    <input className={styles.radio} type="radio" defaultChecked name="page"/>                
                    <span>1</span>
                </div>
                <div>
                    <input className={styles.radio} type="radio" name="page"/>           
                    <span>2</span>
                </div>
                <div>
                    <input className={styles.radio} type="radio" name="page"/>           
                    <span>3</span>
                </div>
                <div>
                    <input className={styles.radio} type="radio" name="page"/>           
                    <span>4</span>
                </div>
            </div>
        </Center>
    );
};
