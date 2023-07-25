import { useEffect, useState } from "react"
import styles from "./source.module.scss";

export const Day77: React.FC = () => {
    const [number, setNumber] = useState(8);
    useEffect(() => {
        if(number === 0){
            setNumber(8)
        }
    }, [number])
    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={() => setNumber(n => n === 8 ? 1 : 0)}>{number === 5 ? "Disable blur" : "Enable blur"}</button>
            {Array.from({length: number}).map((_, i) => <div key={i} className={styles.ball} />)}            
        </div> 
    );
};
