import { Bell, ChatsCircle, Gauge, Gear, User } from "phosphor-react";
import React, { useState } from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const MenuIcon = () => (
    <svg stroke="white" fill="none" width="100%" height="100%">
        <polyline points="2,7 14,7" />
        <circle cx={20} cy={7} r="1.5" />
        <polyline points="2,17 22,17" />
    </svg>
);

export const SearchIcon = () => (
    <svg stroke="white" fill="none" width="100%" height="100%">
        <circle cx={10} cy={10} r="7" />
        <polyline points="16,16 20,20" />
    </svg>
);

export const Day7: React.FC = () => {
    const [state, setState] = useState<"menu" | "search" | null>(null);
    return (
        <Center>
            <div
                className={
                    state === "menu"
                        ? styles.card + " " + styles.menuOpen
                        : state === "search"
                        ? styles.card + " " + styles.searchOpen
                        : styles.card
                }
            >
                <header className={styles.header}>
                    <button
                        className={styles.button}
                        onClick={() => setState((v) => (!v ? "menu" : null))}
                    >
                        <MenuIcon />
                    </button>
                    <h1>Notifications</h1>
                    <button
                        className={styles.button}
                        onClick={() => setState((v) => (!v ? "search" : null))}
                    >
                        <SearchIcon />
                    </button>
                    <div className={styles.search}>
                        <input placeholder="Search ..." />
                    </div>
                </header>
                <ul className={styles.notifications}>
                    <li>
                        <span>9:24 AM</span>
                        <span>
                            <strong>John Walker</strong> posted a photo on your
                            wall.
                        </span>
                    </li>
                    <li>
                        <span>8:19 AM</span>
                        <span>
                            <strong>Alice Parker</strong> commented your last
                            post.
                        </span>
                    </li>
                    <li>
                        <span>Yesterday</span>
                        <span>
                            <strong>Luke Wayne</strong> added you as friend.
                        </span>
                    </li>
                </ul>
            </div>
            <ul
                className={
                    state === "menu"
                        ? styles.menu + " " + styles.menuOpen
                        : styles.menu
                }
            >
                <li>
                    <Gauge size={16} weight="fill" />
                    Dashboard
                </li>
                <li>
                    <User size={16} weight="fill" />
                    Profile
                </li>
                <li>
                    <Bell size={16} weight="fill" />
                    Notifications
                </li>
                <li>
                    <ChatsCircle size={16} weight="fill" />
                    Messages
                </li>
                <li>
                    <Gear size={16} weight="fill" />
                    Settings
                </li>
            </ul>
        </Center>
    );
};
