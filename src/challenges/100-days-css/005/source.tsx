import React, { useMemo, useRef, useState } from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

const mapCursorToSvgPoint = (
    mouseEvent: React.MouseEvent<HTMLDivElement>,
    svg: SVGSVGElement,
    point: DOMPoint
): Point => {
    if (!point || !svg) {
        return { x: 0, y: 0 };
    }
    point.x = mouseEvent.clientX;
    point.y = mouseEvent.clientY;
    return point.matrixTransform(svg.getScreenCTM()?.inverse());
};

export type Point = { x: number; y: number };

export type Day5Props = {
    revenue: number;
    date: string;
    labels: string[];
    legend: string[];
    data: [number, number][][];
};

export const Day5: React.FC<Day5Props> = ({
    revenue,
    date,
    labels,
    legend,
    data
}) => {
    const [cursorStart, setCursorStart] = useState<Point | null>(null);
    const [transform, setTransform] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState<number>(1);
    const [prevTransform, setPrevTransform] = useState<Point>({ x: 0, y: 0 });
    const svgRef = useRef<SVGSVGElement>(null);

    const [minX, maxX, minY, maxY] = useMemo(() => {
        const xValues = data.flatMap((d) => d).map((d) => d[0]);
        const yValues = data.flatMap((d) => d).map((d) => d[1]);

        const minX = xValues.sort((a, b) => a - b)[0];
        const maxX = xValues.sort((a, b) => b - a)[0];
        const minY = yValues.sort((a, b) => a - b)[0];
        const maxY = yValues.sort((a, b) => b - a)[0];

        return [minX, maxX, minY, maxY];
    }, [data]);

    const svgPoint = useMemo(
        () => svgRef.current?.createSVGPoint(),
        [svgRef.current]
    );
    const zoomIn = () => setZoom((t) => t + 0.1);
    const zoomOut = () => setZoom((t) => t - 0.1);

    const onMouseDown = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ): void => {
        if (svgRef.current && svgPoint) {
            setCursorStart(mapCursorToSvgPoint(e, svgRef.current, svgPoint));
        }
    };

    const onMouseUp = () => {
        setCursorStart(null);
        setPrevTransform(transform);
    };

    const onMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ): void => {
        if (cursorStart && svgRef.current && svgPoint) {
            setTransform({
                x:
                    cursorStart.x -
                    mapCursorToSvgPoint(e, svgRef.current, svgPoint).x +
                    prevTransform.x,
                y:
                    cursorStart.y -
                    mapCursorToSvgPoint(e, svgRef.current, svgPoint).y +
                    prevTransform.y
            });
        }
    };

    const onMouseEnter = () => {
        setCursorStart(null);
        setPrevTransform(transform);
    };

    const onMouseLeave = () => {
        setCursorStart(null);
        setPrevTransform(transform);
    };

    return (
        <Center>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.heading}>Weekly report</h1>
                    <span className={styles.label}>Revenue</span>
                    <span className={styles.date}>{date}</span>
                    <span className={styles.currency}>$ {revenue}</span>
                </div>
                <div className={styles.body}>
                    <div className={styles.legend}>
                        {legend.map((l) => (
                            <span key={l}>{l}</span>
                        ))}
                    </div>
                    <div
                        className={styles.chart}
                        role="figure"
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                        onMouseMove={onMouseMove}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <div className={styles.zoom}>
                            <button onClick={zoomIn}>+</button>
                            <button onClick={zoomOut}>-</button>
                        </div>
                        <svg
                            ref={svgRef}
                            width={"100%"}
                            height={"100%"}
                            viewBox={`${minX} ${minY} ${maxX} ${maxY}`}
                            preserveAspectRatio="xMidYMid slice"
                        >
                            {data.map((series, i) => (
                                <g
                                    key={i}
                                    transform={`translate(${-transform.x},${-transform.y}) scale(${zoom})`}
                                >
                                    <polyline
                                        points={series
                                            .map((s) => `${s[0]},${s[1]}`)
                                            .join(" ")}
                                    />
                                    {series.map((p, idx) => (
                                        <circle
                                            key={idx}
                                            cx={p[0]}
                                            cy={p[1]}
                                            r="2"
                                        />
                                    ))}
                                </g>
                            ))}
                        </svg>
                    </div>
                    <div
                        className={styles.labels}
                        style={{
                            left: -transform.x,
                            width: `${zoom * 100}%`
                        }}
                    >
                        {labels.map((l) => (
                            <span key={l}>{l}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Center>
    );
};
