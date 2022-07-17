import styles from './Work.module.scss';

function Work() {
    return (
        <div id="work" className={styles.work}>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>How We Work</h3>
                </div>
                <h2 className={styles.workTitle}>
                    We build
                    <span> reliable infrastructure</span>, use comprehensive in-house tools.
                </h2>
                <div className={styles.pricing} id="pricing">
                    <ul className={styles.pricingList}>
                        {[...new Array(3)].map((item, index) => {
                            return (
                                <li className={styles.pricingItem} key={index}>
                                    <div className={styles.pricingItemContainer}>
                                        <div className={styles.pricingItemHeading}>
                                            <h3 className={styles.pricingItemTitle}>PRO</h3>
                                        </div>
                                        <div className={styles.pricingItemPrice}>
                                            <span className={styles.pricingItemPriceCount}>$15000</span>
                                            <span className={styles.pricingItemPriceTime}>/month</span>
                                        </div>
                                        <ul className={styles.pricingItemContent}>
                                            <li className={styles.pricingContentItem}>
                                                <strong>10</strong> billable hours included per month.
                                            </li>
                                            <li className={styles.pricingContentItem}>
                                                Billable hourly rate of <strong>$300</strong> after the included 10
                                                hours are utilized.
                                            </li>
                                            <li className={styles.pricingContentItem}>
                                                24/7/365 on-call and 99.9% SLA
                                            </li>
                                            <li className={styles.pricingContentItem}>
                                                Communication via ticketing system and e-mail.
                                            </li>
                                        </ul>
                                        <button href="#" className={styles.pricingItemContactBtn}>
                                            Contact US
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Work;
