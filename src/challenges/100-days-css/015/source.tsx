import {
    FilePlus,
    Upload,
    File as FileIcon,
    X,
    Trash,
    ArrowsClockwise,
    Cube,
    Package,
    Check
} from "phosphor-react";
import React, { useRef, useState } from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

export const Day15: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const [dragInside, setDragInside] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const [uploading, setUploading] = useState<boolean>(false);
    const [uploaded, setUploaded] = useState<boolean>(false);
    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!e.dataTransfer.files?.length) {
            return;
        }
        setDragInside(false);
        setFile(e.dataTransfer.files[0]);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) {
            return;
        }

        setFile(e.target.files.item(0));
    };
    const upload = () => {
        if (uploaded) {
            setFile(null);
            setUploaded(false);
            setUploading(false);
            setProgress(0);
            if (inputRef.current) {
                inputRef.current.value = "";
            }
            return;
        }
        setUploading(true);
        const tick = 100;
        const completionTime = 5000;
        let duration = 0;

        const interval = setInterval(() => {
            duration += tick;
            setProgress((p) => p + tick / completionTime);
            if (duration >= completionTime) {
                setUploading(false);
                setUploaded(true);
                clearInterval(interval);
            }
        }, tick);
    };
    console.log(progress);
    return (
        <Center>
            <div className={styles.card}>
                <div className={styles.headerContainer}>
                    {uploading
                        ? "Uploading..."
                        : uploaded
                        ? "Your file is uploaded!"
                        : "Drop file to upload"}
                </div>
                <div
                    className={
                        styles.dropContainer +
                        (uploading
                            ? " " + styles.uploading
                            : uploaded
                            ? " " + styles.uploaded
                            : "")
                    }
                >
                    <div className={styles.dropZone} onDrop={onDrop}>
                        <input
                            ref={inputRef}
                            id="file"
                            type="file"
                            onChange={onChange}
                            onDragEnter={() => setDragInside(true)}
                            onDragLeave={() => setDragInside(false)}
                        />
                        <label htmlFor="file" aria-label="upload">
                            <div>
                                <Upload
                                    size={48}
                                    weight="light"
                                    className={
                                        !file && !dragInside
                                            ? styles.visible
                                            : styles.hidden
                                    }
                                />
                            </div>
                            <div>
                                <FileIcon
                                    size={48}
                                    weight="light"
                                    className={
                                        file && !dragInside
                                            ? styles.visible
                                            : styles.hidden
                                    }
                                />
                            </div>
                            <div>
                                <FilePlus
                                    size={48}
                                    weight="light"
                                    className={
                                        dragInside
                                            ? styles.visible
                                            : styles.hidden
                                    }
                                />
                            </div>
                        </label>
                        {file && (
                            <button
                                className={styles.removeButton}
                                onClick={() => setFile(null)}
                                aria-label="Delete"
                            >
                                <Trash size={16} weight="duotone" />
                            </button>
                        )}
                    </div>
                    <div
                        className={
                            styles.box +
                            (uploading ? " " + styles.boxAnimation : "")
                        }
                    >
                        <Cube size={48} weight={"thin"} />
                        <Package size={48} weight={"thin"} />
                    </div>
                    <div className={styles.statusIcon}>
                        {uploading && (
                            <ArrowsClockwise size={48} weight={"thin"} />
                        )}
                        {uploaded && <Check size={48} weight={"thin"} />}
                    </div>
                </div>
                <div className={styles.fileName}>
                    {file?.name ?? "File not selected"}
                </div>
                <div className={styles.actionContainer}>
                    <button disabled={!file || uploading} onClick={upload}>
                        {uploaded ? "Done" : "Upload file"}
                    </button>
                </div>
            </div>
        </Center>
    );
};
