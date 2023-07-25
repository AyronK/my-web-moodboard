import { useEffect, useState } from "react"
import styles from "./source.module.scss";

const numberOfBalls = 8;

export const Day77: React.FC = () => {
    const [number, setNumber] = useState(numberOfBalls);
    useEffect(() => {
        if(number === 0){
            setNumber(numberOfBalls)
        }
    }, [number])
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => setNumber(n => n === numberOfBalls ? 1 : 0)}>{number === numberOfBalls ? "Disable blur" : "Enable blur"}</button>
            {Array.from({length: number}).map((_, i) => <div key={i} className={styles.ball} />)}            
        </div> 
    );
};
