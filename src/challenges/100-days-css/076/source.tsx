import { useState } from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day76: React.FC = () => {
    const [value, setValue] = useState("");
    return (
        <Center>
            <div className={styles.container + " " + (value === "password" ? styles.pass : "")}>
                <input className={styles.input} placeholder='Enter "password"' type="password" value={value} onChange={e => setValue(e.target.value)}/>
                <div className={styles.secretLabel} onClick={() => setValue("")}>Secret Key</div>
                <div className={styles.secretValue}>MD5-SU3-CX8</div>
            </div>
        </Center>
    );
};
