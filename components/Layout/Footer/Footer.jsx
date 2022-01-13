import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo-primary.png"
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={`container-fluid ${styles.container}`}>
            <div className={`row ${styles.row}`}>
                <div className={`col-3 ${styles.linkDiv}`}>
                        <Link href="/">
                            <a className={styles.link}>
                                <Image
                                    src={Logo}
                                    alt="Brenda McBride Logo"
                                    width={45}
                                    height={45}
                                />
                                <p>Brenda<br/>McBride</p>
                            </a>
                        </Link>
                </div>
                <div className={`col-6 ${styles.authorDiv}`}>
                    <p className={`${styles.authorP}`}>Designed & Created with <span style={{color: "red"}}>❤</span> by <a href="#" target="_blank">Jakub</a></p>
                </div>
                <div className={`col-3 ${styles.socialDiv}`}>
                    <ul className={styles.footerUl}>
                        <li className={`${styles.socialLi}`}><a href="#" target="_blank"><i className={`fab fa-twitter-square ${styles.socialIcon}`}></i></a></li>
                        <li className={`${styles.socialLi}`}><a href="#" target="_blank"><i className={`fab fa-facebook-square ${styles.socialIcon}`}></i></a></li>
                        <li className={`${styles.socialLi}`}><a href="#" target="_blank"><i className={`fab fa-instagram ${styles.socialIcon}`}></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;