import React from "react";
import styles from "./source.module.scss";

export const Day27: React.FC = () => {
    return (
        <div className={styles.card}>
            <div>
                <h1>Saturday</h1>
                <span>March 18, 2023</span>
            </div>
            <hr />
            <div className={styles.checkbox}>
                <input id="1" type="checkbox" />
                <label htmlFor="1">Write CSS</label>
                <svg>
                    <path d="M 9,11 12,15 20,2" />
                </svg>
            </div>
            <div className={styles.checkbox}>
                <input id="2" type="checkbox" />
                <label htmlFor="2">Record a GIF</label>
                <svg>
                    <path d="M 9,11 12,15 20,2" />
                </svg>
            </div>
            <div className={styles.checkbox}>
                <input id="3" type="checkbox" />
                <label htmlFor="3">Post it on LinkedIn</label>
                <svg>
                    <path d="M 9,11 12,15 20,2" />
                </svg>
            </div>
            <div className={styles.checkbox}>
                <input id="4" type="checkbox" />
                <label htmlFor="4">Coffee break</label>
                <svg>
                    <path d="M 9,11 12,15 20,2" />
                </svg>
            </div>
        </div>
    );
};
