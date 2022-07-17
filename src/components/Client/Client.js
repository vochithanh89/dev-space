import styles from './Client.module.scss';

function Client() {
    return (
        <div className={styles.client}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>Trusted By The Best Clients</h3>
                </div>
                <ul className={styles.clientList}>
                    {[...new Array(6)].map((item, index) => {
                        return (
                            <li className={styles.clientItem} key={index}>
                                <a href="#">
                                    <img
                                        className={styles.clientItemImg}
                                        src="https://www.lapa.ninja/lab/dev-space/images/algolia.svg"
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Client;
