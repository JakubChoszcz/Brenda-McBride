import Link from 'next/link';
import styles from './AboutContainer.module.scss';

const AboutContainer = () => {
    return (
        <div className={`${styles.aboutContainer}`}>
            <div className={`container`}>
                <div className={`row ${styles.aboutRow}`}>
                    <div className={`col-12`}>
                        <Link href="/" passHref>
                            <a className={`${styles.aboutA}`}>
                                <div className={`${styles.aboutDiv}`}>
                                    <div className={`${styles.aboutContent}`}>
                                        <h1>I first encountered The Fence in a small store stuffed with magazines of every variety. The corner of the first…</h1>
                                        <p>Duis feugiat libero id arcu tincidunt mattis.</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContainer;