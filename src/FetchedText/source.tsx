import React, { Suspense, ReactNode } from "react";

const status: { [key: string]: string } = {};
const result: { [key: string]: string } = {};
const fetching: { [key: string]: Promise<void> } = {};

function fetchText(url: string): () => string | undefined {
    if (!fetching[url]) {
        status[url] = "pending";

        fetching[url] = fetch(url)
            .then((res) => res.text())
            .then((success) => {
                status[url] = "fulfilled";
                result[url] = success;
            })
            .catch((error) => {
                status[url] = "rejected";
                result[url] = error;
            });
    } else if (status[url] === "pending") {
        throw fetching[url];
    }

    return () => {
        if (status[url] === "pending") {
            throw fetching[url];
        } else if (status[url] === "rejected") {
            throw result[url];
        } else if (status[url] === "fulfilled") {
            return result[url];
        }
    };
}

export const FetchedTextLazy: React.FC<{
    url: string;
    children?: (text: string | undefined) => ReactNode;
}> = ({ children, url }) => {
    const text = fetchText(url)();
    return children ? <>{children(text)}</> : <>{text}</>;
};

export const FetchedText: React.FC<{
    url: string;
    fallback?: ReactNode;
    children?: (text: string | undefined) => ReactNode;
}> = ({ fallback, children, url }) => (
    <Suspense fallback={fallback ?? "Loading..."}>
        <FetchedTextLazy url={url}>{children}</FetchedTextLazy>
    </Suspense>
);
