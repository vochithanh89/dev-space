import clsx from 'clsx';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <ul className={styles.footerList}>
                    <li className={clsx(styles.footerItemTitle, styles.footerItem)}>Services</li>
                    <li className={styles.footerItem}>
                        <a href="#">DevOps</a>
                    </li>
                    <li className={styles.footerItem}>
                        <a href="#">Development</a>
                    </li>
                    <li className={styles.footerItem}>
                        <a href="#">Consultant</a>
                    </li>
                </ul>
                <ul className={styles.footerList}>
                    <li className={clsx(styles.footerItemTitle, styles.footerItem)}>Services</li>
                    <li className={styles.footerItem}>
                        <a href="#">DevOps</a>
                    </li>
                    <li className={styles.footerItem}>
                        <a href="#">Development</a>
                    </li>
                    <li className={styles.footerItem}>
                        <a href="#">Consultant</a>
                    </li>
                </ul>
                <ul className={styles.footerList}>
                    <li className={clsx(styles.footerItemTitle, styles.footerItem)}>Services</li>
                    <li className={styles.footerItem}>
                        <a href="#">DevOps</a>
                    </li>
                    <li className={styles.footerItem}>
                        <a href="#">Development</a>
                    </li>
                    <li className={styles.footerItem}>
                        <a href="#">Consultant</a>
                    </li>
                </ul>
                <ul className={styles.footerList}>
                    <li className={clsx(styles.footerItemTitle, styles.footerItem)}>Copyright</li>
                    <li className={styles.footerItem}>
                        <a href="#">Free Streamline Icons</a>
                    </li>
                    <li className={styles.footerItem}>
                        <a href="#">Buy Illustration Pack by Nimart1</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
