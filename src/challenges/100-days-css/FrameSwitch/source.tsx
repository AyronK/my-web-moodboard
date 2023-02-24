import React, { ReactNode, useId, useState } from "react";
import { Frame } from "../Frame/source";

import styles from "./source.module.scss";

export type FrameSwitchProps = {
    children: (idx: number) => ReactNode;
    text: (idx: number) => JSX.Element;
    overflow: (idx: number) => boolean;
    buttons: ReactNode[];
};

function delay(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export const FrameSwitch: React.FC<FrameSwitchProps> = ({
    children,
    buttons,
    overflow,
    text
}) => {
    const [current, setCurrent] = useState<number>(0);
    const [next, setNext] = useState<number>(0);
    const [switching, setSwitching] = useState<boolean>(false);
    const id = useId();
    const currentPanelId = `${id}-panel-${current}`;
    const currentTabId = `${id}-tab-${current}`;

    return (
        <div role="tablist" className={styles.frameSwitch}>
            <Frame
                text={text ? text(current) : undefined}
                overflow={overflow ? overflow(current) : undefined}
                actions={buttons.map((c, idx) => (
                    <button
                        key={idx}
                        className={
                            idx === next ? styles.buttonActive : styles.button
                        }
                        role="tab"
                        id={currentTabId}
                        aria-controls={currentPanelId}
                        disabled={next !== current}
                        onClick={async () => {
                            setSwitching(true);
                            setNext(idx);
                            await delay(300);
                            setCurrent(idx);
                            setSwitching(false);
                        }}
                    >
                        {c}
                    </button>
                ))}
            >
                <div
                    id={currentPanelId}
                    role="tabpanel"
                    className={switching ? styles.frameSwitching : styles.frame}
                >
                    {children(current)}
                </div>
            </Frame>
        </div>
    );
};
