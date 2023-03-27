import {
    Bell,
    ChatsCircle,
    Gauge,
    Gear,
    MagnifyingGlass
} from "phosphor-react";
import React, { useEffect, useState } from "react";
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

export const Day36: React.FC = () => {
    const [route, setRoute] = useState<string>("Dashboard");
    const [nextRoute, setNextRoute] = useState<string>("Dashboard");

    useEffect(() => {
        setTimeout(() => {
            setRoute(nextRoute);
        }, 350);
    }, [nextRoute]);

    return (
        <Center>
            <div className={styles.card}>
                <header className={styles.header}>
                    <button
                        className={styles.button}
                        disabled={nextRoute === "Dashboard"}
                        onClick={() => setNextRoute("Dashboard")}
                    >
                        <Gauge size={20} weight="bold" />
                    </button>
                    <button
                        className={styles.button}
                        disabled={nextRoute === "Messages"}
                        onClick={() => setNextRoute("Messages")}
                    >
                        <ChatsCircle size={20} weight="bold" />
                    </button>
                    <button
                        className={styles.button}
                        disabled={nextRoute === "Notifications"}
                        onClick={() => setNextRoute("Notifications")}
                    >
                        <Bell size={20} weight="bold" />
                    </button>
                    <button
                        className={styles.button}
                        disabled={nextRoute === "Settings"}
                        onClick={() => setNextRoute("Settings")}
                    >
                        <Gear size={20} weight="bold" />
                    </button>
                    <button className={styles.button}>
                        <MagnifyingGlass size={20} weight="bold" />
                    </button>
                </header>
                <div
                    className={
                        styles.content +
                        " " +
                        (nextRoute === route && styles["active"])
                    }
                >
                    <h1>{route}</h1>
                    <p>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </p>
                    <p>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </p>
                </div>
            </div>
        </Center>
    );
};
