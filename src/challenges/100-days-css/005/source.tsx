import React, {
    useCallback,
    useLayoutEffect,
    useMemo,
    useRef,
    useState
} from "react";
import { Center } from "../../../Frame/Frame";
import styles from "./source.module.scss";

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
    const [mouseIn, setMouseIn] = useState<any>(null);
    const [cursorStart, setCursorStart] = useState<any>(null);
    const [transform, setTransform] = useState<any>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState<number>(1);
    const [prevTransform, setPrevTransform] = useState<any>({ x: 0, y: 0 });
    const svgRef = useRef<any>(null);

    const [minX, maxX, minY, maxY] = useMemo(() => {
        const xValues = data.flatMap((d) => d).map((d) => d[0]);
        const yValues = data.flatMap((d) => d).map((d) => d[1]);

        const minX = xValues.sort((a, b) => a - b)[0];
        const maxX = xValues.sort((a, b) => b - a)[0];
        const minY = yValues.sort((a, b) => a - b)[0];
        const maxY = yValues.sort((a, b) => b - a)[0];

        return [minX, maxX, minY, maxY];
    }, [data]);

    const pt = useMemo(
        () => svgRef.current?.createSVGPoint(),
        [svgRef.current]
    );

    const cursorPoint = (evt: any) => {
        pt.x = evt.clientX;
        pt.y = evt.clientY;
        return pt.matrixTransform(svgRef.current.getScreenCTM().inverse());
    };

    const onScroll = useCallback(
        (ev: Event) => {
            if (mouseIn) {
                setZoom((t) => t - (ev as WheelEvent).deltaY / 2500.0);
            }
        },
        [mouseIn]
    );

    useLayoutEffect(() => {
        document.addEventListener("wheel", onScroll);
        return () => document.removeEventListener("scroll", onScroll);
    }, [onScroll]);

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
                        onMouseDown={(e) => setCursorStart(cursorPoint(e))}
                        onMouseUp={() => {
                            setCursorStart(null);
                            setPrevTransform(transform);
                        }}
                        onMouseMove={(e): void => {
                            if (cursorStart) {
                                setTransform({
                                    x:
                                        cursorStart.x -
                                        cursorPoint(e).x +
                                        prevTransform.x,
                                    y:
                                        cursorStart.y -
                                        cursorPoint(e).y +
                                        prevTransform.y
                                });
                            }
                        }}
                        onMouseOver={() => {
                            setMouseIn(true);
                            console.log("over");
                        }}
                        onMouseEnter={() => {
                            setCursorStart(null);
                            setPrevTransform(transform);
                            console.log("enter");
                            setMouseIn(true);
                        }}
                        onMouseLeave={() => {
                            setCursorStart(null);
                            setPrevTransform(transform);
                            console.log("leave");
                            setMouseIn(false);
                        }}
                    >
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
