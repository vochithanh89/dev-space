import styles from './Team.module.scss';

function Team() {
    return (
        <div className={styles.team} id="team">
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>Meet Our Team</h3>
                </div>
                <ul className={styles.memberList}>
                    <li className={styles.memberItem}>
                        <div className={styles.memberItemContainer}>
                            <a href="#" className={styles.memberImg}>
                                <img src="https://www.lapa.ninja/lab/dev-space/images/team-2.jpg" alt="member img" />
                            </a>
                            <a href="#" className={styles.memberName}>
                                Tinh Nguyen
                            </a>
                            <p className={styles.memberPosition}>Designer</p>
                        </div>
                    </li>
                    <li className={styles.memberItem}>
                        <div className={styles.memberItemContainer}>
                            <a href="#" className={styles.memberImg}>
                                <img src="https://www.lapa.ninja/lab/dev-space/images/team-2.jpg" alt="member img" />
                            </a>
                            <a href="#" className={styles.memberName}>
                                Tinh Nguyen
                            </a>
                            <p className={styles.memberPosition}>Designer</p>
                        </div>
                    </li>
                    <li className={styles.memberItem}>
                        <div className={styles.memberItemContainer}>
                            <a href="#" className={styles.memberImg}>
                                <img src="https://www.lapa.ninja/lab/dev-space/images/team-2.jpg" alt="member img" />
                            </a>
                            <a href="#" className={styles.memberName}>
                                Tinh Nguyen
                            </a>
                            <p className={styles.memberPosition}>Designer</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Team;
