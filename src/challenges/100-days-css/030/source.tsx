import React from "react";
import styles from "./source.module.scss";

export const Day30: React.FC = () => {
    return (
        <div className={styles.container}>
            <svg>
                <circle r="84" cx="200" cy="214" />
                <path d="M 200,-60 200,145 Q 260,250 140,250 L 140,250 0,400"></path>
                <path d="M 0,400 140,250 140,250 Q 200,145 260,250 L 260,250 400,400"></path>
                <path d="M 400,400 260,250 Q 140,250 200,145 L 200,145 200,0"></path>
                {/* <path d="M 200,145 Q 200,217 140,250"></path>
                <path d="M 140,250 Q 200,217 260,250"></path>
                <path d="M 260,250 Q 200,217 200,145"></path> */}
                {/* 
                <path d="M 140,250 200,145 260,250 140,250"></path> */}
            </svg>
        </div>
    );
};
