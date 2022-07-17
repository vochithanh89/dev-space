import clsx from 'clsx';
import Slogan from '../Slogan/Slogan';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.navBar}>
                    <a href="/" className={styles.logo}>
                        <img
                            src="https://www.lapa.ninja/lab/dev-space/images/logo.svg"
                            alt="logo"
                            className={styles.logoImg}
                        />
                        <p className={styles.logoText}>dev space</p>
                    </a>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <a href="#do">What we do</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#work">How we work</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#pricing">Pricing</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#team">Our team</a>
                        </li>
                        <li className={clsx(styles.navItem, styles.navItemBtn)}>
                            <a href="#">Download</a>
                        </li>
                    </ul>
                </nav>
                <Slogan />
            </div>
        </header>
    );
}

export default Header;
