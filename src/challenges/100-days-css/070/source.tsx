import styles from "./source.module.scss";

export const Day70: React.FC = () => {
    return (
        <div className={styles.calendar}>
            <div className={styles.day}>
                <div>
                    <span>Monday</span>
                    <span>25</span>
                </div>
            </div>
            <div className={styles.day}>
                <div>
                    <span>Tuesday</span>
                    <span>26</span>
                </div>
            </div>
            <div className={styles.day}>
                <div>
                    <span>Wednesday</span>
                    <span>27</span>
                </div>
            </div>
            <div className={styles.day}>
                <div>
                    <span>Thursday</span>
                    <span>28</span>
                </div>
            </div>
        </div>
    );
};
