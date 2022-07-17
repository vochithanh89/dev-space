import styles from './Do.module.scss';

function Do() {
    return (
        <div id="do" className={styles.do}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>What We Do</h3>
                    <ul className={styles.doList}>
                        <li className={styles.doItem}>
                            <img
                                className={styles.doItemImg}
                                src="https://www.lapa.ninja/lab/dev-space/images/what-we-do-1.svg"
                                alt=""
                            />
                            <h3 className={styles.doItemTitle}>Interface Design</h3>
                            <p className={styles.doItemDes}>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum
                            </p>
                            <a href="#" className={styles.learnMoreBtn}>
                                Learn more
                            </a>
                        </li>
                        <li className={styles.doItem}>
                            <img
                                className={styles.doItemImg}
                                src="https://www.lapa.ninja/lab/dev-space/images/what-we-do-1.svg"
                                alt=""
                            />
                            <h3 className={styles.doItemTitle}>Interface Design</h3>
                            <p className={styles.doItemDes}>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum
                            </p>
                            <a href="#" className={styles.learnMoreBtn}>
                                Learn more
                            </a>
                        </li>
                        <li className={styles.doItem}>
                            <img
                                className={styles.doItemImg}
                                src="https://www.lapa.ninja/lab/dev-space/images/what-we-do-1.svg"
                                alt=""
                            />
                            <h3 className={styles.doItemTitle}>Interface Design</h3>
                            <p className={styles.doItemDes}>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum
                            </p>
                            <a href="#" className={styles.learnMoreBtn}>
                                Learn more
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Do;
