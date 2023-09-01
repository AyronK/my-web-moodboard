import { useState } from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day82: React.FC = () => {
    const [clicked, setClicked] = useState<boolean>(false);
    return (
        <Center>
            <button className={styles.button + " " + (clicked ? styles.clicked : undefined)} onClick={() => setClicked(c => !c)}>Send</button>
        </Center>
    );
};
