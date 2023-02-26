import React from "react";
import styles from "./source.module.scss";

enum Weather {
    ClearSky = "clear-sky",
    Cloudy = "cloudy",
    Raining = "raining",
    Snowing = "snowing"
}

export const Day9: React.FC<{
    weather: Weather;
    night?: boolean;
}> = ({ night = true, weather = Weather.Raining }) => {
    return (
        <div className={styles.card}>
            <div
                className={
                    styles.forecastAnimationContainer +
                    " " +
                    styles[`weather--${weather}`] +
                    " " +
                    styles[`time--${night ? "night" : "day"}`]
                }
            >
                <div className={styles.sky}></div>
                {weather === Weather.Cloudy && (
                    <div className={styles.clouds}>
                        <div className={styles.cloud}></div>
                        <div className={styles.cloud}></div>
                        <div className={styles.cloud}></div>
                    </div>
                )}
                <div className={styles.celestial}>
                    {night && (
                        <div className={styles.craters}>
                            {Array.from({ length: 10 }).map((_, idx) => (
                                <div key={idx} className={styles.crater}></div>
                            ))}
                        </div>
                    )}
                </div>
                {weather !== Weather.ClearSky && weather !== Weather.Cloudy && (
                    <div className={styles.particles}>
                        {Array.from({ length: 40 }).map((_, idx) => (
                            <div key={idx} className={styles.particle}>
                                <div className={styles.particleBody}></div>
                            </div>
                        ))}
                    </div>
                )}
                <div className={styles.terrain}></div>
            </div>
            <div className={styles.forecastContainer}>
                <div>12°</div>
                <div>Wind: E 7 km/h</div>
                <div>Humidity: 87%</div>
                <div>TUE</div>
                <div>WED</div>
                <div>
                    <strong>21° / 9°</strong>
                </div>
                <div>
                    <strong>23° / 10°</strong>
                </div>
            </div>
        </div>
    );
};
