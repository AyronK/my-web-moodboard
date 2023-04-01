import { Warning } from "@phosphor-icons/react";
import React, { useState } from "react";
import styles from "./source.module.scss";

export const Day41: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(true);

    return (
        <div className={styles.cardContainer}>
            <div className={styles.card + " " + (visible ? "" : styles.hidden)}>
                <Warning weight="fill" size={48} />
                <h1>Oh snap!</h1>
                <p>An error has occured while creating an error report.</p>
                <button onClick={() => setVisible(false)}>Dismiss</button>
            </div>
        </div>
    );
};
