import React from "react";
import { Center } from "../../../Frame/Frame";
import { Lamp } from "@phosphor-icons/react";
import styles from "./source.module.scss";

export const Day43: React.FC = () => {
    return (
        <Center>
            <Lamp size={120} className={styles.bulb} weight="fill" />
        </Center>
    );
};
