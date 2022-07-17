import styles from './OpenSource.module.scss';

function OpenSource() {
    return (
        <div className={styles.openSource}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>We love Open Source</h3>
                </div>
                <img
                    className={styles.openSourceImg}
                    src="https://www.lapa.ninja/lab/dev-space/images/open-source.svg"
                    alt="open source img"
                />
                <h3 className={styles.openSourceTitle}>We're making Open Source Software</h3>
                <a href="#" className={styles.followBtn}>
                    Follow us on Github
                </a>
            </div>
        </div>
    );
}

export default OpenSource;
