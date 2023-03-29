import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useState } from "react";
import styles from "./source.module.scss";

export const Day29: React.FC = () => {
    const [text, setText] = useState<string>("");
    return (
        <div className={styles.select}>
            <input
                id="select"
                type="select"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <label htmlFor="select">Search...</label>
            <MagnifyingGlass size={24} weight="bold" />
            <ul>
                {!!text && (
                    <>
                        <li>
                            "<strong>{text}</strong>"
                        </li>
                        <li>
                            What is <strong>{text}</strong>?
                        </li>
                        <li>
                            How to improve <strong>{text}</strong>?
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};
