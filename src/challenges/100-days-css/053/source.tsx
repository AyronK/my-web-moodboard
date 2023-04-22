import React from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day53: React.FC = () => {
    return (
        <Center>
            <div className={styles.range}>
                <input type={"range"} />
            </div>
        </Center>
    );
};
