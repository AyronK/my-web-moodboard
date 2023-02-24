import { GithubLogo } from "phosphor-react";
import React from "react";
import { a11yDark, CopyBlock } from "react-code-blocks";
import styles from "./CodeBlock.module.scss";

export const CodeBlock: React.FC<{
    code?: string;
    language: string;
    githubUrl?: string;
}> = ({ code, githubUrl, language }) => (
    <div className={styles.codeBlock}>
        {githubUrl && (
            <a
                className={styles.githubButton}
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
            >
                <GithubLogo weight="duotone" size={20} />
            </a>
        )}
        {code && (
            <CopyBlock
                text={code.trim()}
                theme={{
                    ...a11yDark,
                    backgroundColor: "transparent"
                }}
                language={language}
                wrapLines={true}
                showLineNumbers={false}
            />
        )}
    </div>
);
