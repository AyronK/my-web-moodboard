import { DeviceMobile, Envelope } from "phosphor-react";
import React from "react";
import styles from "./source.module.scss";

export const Day14: React.FC = () => {
    return (
        <div className={styles.flip}>
            <div className={styles.card}>
                <div className={styles.front}>
                    <div className={styles.avatar}>
                        <img src="https://avatars.githubusercontent.com/u/26150059?v=4"></img>
                    </div>
                    <div className={styles.name}>Marcin Kotlicki</div>
                    <div>Software Developer</div>
                    <div>
                        <DeviceMobile />
                        &nbsp;+48 000 000 000
                    </div>
                    <div>
                        <Envelope />
                        &nbsp;example@email.com
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.back}>
                    <img
                        src="https://raw.githubusercontent.com/danielcranney/profileme-dev/4442a351ea1871ad8ba08a4ec82cb8eae9d73b8b/public/icons/skills/csharp-dark.svg"
                        width="48"
                        height="48"
                        alt="C#"
                    />
                    <img
                        src="https://raw.githubusercontent.com/dotnet/brand/29878855347e055ff15675471f7043fda3e92cea/logo/dotnet-logo.svg"
                        className={styles.lighter}
                        width="48"
                        height="48"
                        alt=".NET"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png"
                        className={styles.lighter}
                        width="48"
                        height="48"
                        alt="Blazor"
                    />
                    <img
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-dark.svg"
                        width="48"
                        height="48"
                        alt="React"
                    />
                    <img
                        src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-dark.svg"
                        width="48"
                        height="48"
                        alt="TypeScript"
                    />
                    <img
                        src="https://raw.githubusercontent.com/danielcranney/profileme-dev/4442a351ea1871ad8ba08a4ec82cb8eae9d73b8b/public/icons/skills/css3-dark.svg"
                        width="48"
                        height="48"
                        alt="CSS"
                    />
                </div>
            </div>
        </div>
    );
};
