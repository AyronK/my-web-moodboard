import React, { useState } from "react";
import styles from "./source.module.scss";

const images = Array.from({ length: 9 }).map((_, i) =>
    i === 0
        ? "https://media.licdn.com/dms/image/C4E03AQGnk-aU9R93AA/profile-displayphoto-shrink_200_200/0/1653306197074?e=1683158400&v=beta&t=gTzrfYClNRsVkafXCEp5um1mNHq8DB2HTy2NhixandI"
        : `https://loremflickr.com/200/200/people?lock=${i}.jpg`
);

export const Day40: React.FC = () => {
    const [open, setOpen] = useState<number | null>(null);
    return (
        <div className={styles.gallery}>
            {images.map((i, idx) => (
                <div
                    key={i}
                    onClick={() => setOpen((v) => (v === idx ? null : idx))}
                    className={
                        styles.image +
                        " " +
                        (open === idx
                            ? styles.active
                            : open === null
                            ? ""
                            : styles.inactive)
                    }
                >
                    <img src={i} />
                </div>
            ))}
        </div>
    );
};
