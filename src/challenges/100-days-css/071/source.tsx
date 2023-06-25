import styles from "./source.module.scss";

const qwerty = ["qwertyuiop", "asdfghjkl", "zxcvbnm,.!?"];

const mapCharacterToClassName = (character: string) => {
    if (character === ".") {
        return styles["key-dot"];
    }
    if (character === ",") {
        return styles["key-comma"];
    }
    if (character === "?") {
        return styles["key-question"];
    }
    if (character === "!") {
        return styles["key-exclamation"];
    }

    return styles[`key-${character}`];
};

export const Day71: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.keyboard}>
                {qwerty.map((row) => {
                    <div key={row} className={styles.row}>
                        {row.map((character) => {
                            <div
                                className={
                                    styles.key +
                                    " " +
                                    mapCharacterToClassName(character)
                                }
                                key={character}
                            >
                                {character}
                            </div>;
                        })}
                    </div>;
                })}
            </div>
        </div>
    );
};
