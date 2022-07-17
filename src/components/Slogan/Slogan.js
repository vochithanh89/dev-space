import styles from './Slogan.module.scss';

function Slogan() {
    return (
        <div className={styles.slogan}>
            <div className={styles.sloganContent}>
                <h1 className={styles.sloganTitle}>
                    Design UI <br /> App Development <br /> Consultant Services
                </h1>
                <p className={styles.sloganText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
                <button className={styles.sloganBtn}>start a project today</button>
            </div>
            <div className={styles.sloganImg}>
                <img src="https://www.lapa.ninja/lab/dev-space/images/yeo-feature-1.svg" alt="slogan img" />
            </div>
        </div>
    );
}

export default Slogan;
