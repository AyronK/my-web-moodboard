import React, { useState } from "react";
import styles from "./source.module.scss";

export const Day39: React.FC = () => {
    const [open, setOpen] = useState<boolean | null>(null);
    return (
        <div
            className={
                styles.menu +
                " " +
                (open !== null && (open ? styles.open : styles.closed))
            }
        >
            <button
                className={styles.button}
                onClick={!open ? () => setOpen(true) : undefined}
            />
            <div className={styles.line} />
            <div className={styles.menuItems}>
                <nav onClick={() => setOpen(false)}>Blog</nav>
                <nav onClick={() => setOpen(false)}>Design</nav>
                <nav onClick={() => setOpen(false)}>Dev</nav>
                <nav onClick={() => setOpen(false)}>Contact</nav>
            </div>
            <div className={styles.line} />
        </div>
    );
};
