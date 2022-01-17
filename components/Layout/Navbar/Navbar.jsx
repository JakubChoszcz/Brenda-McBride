import { useEffect, useState } from "react";
import Menu from "./Menu/Menu";

import styles from './Navbar.module.css';

const Navbar = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 62) {
                document.getElementsByClassName('navbar')[0].style.backgroundColor = '#EAE6DE';
            } else {
                document.getElementsByClassName('navbar')[0].style.backgroundColor = '#ffffff00';
            }
        })
    }, [])

    return (
        <>
            <div className={`container-fluid ${styles.navbarContainer}`}>
            {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen}/>}
                <div className={`row navbar ${styles.navbarRow}`}>
                    <div className={`col-4 ${styles.menuDiv}`}>
                        <div 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className={`${styles.menuBtn} ${isMenuOpen ? styles.open : ''}`}
                        >
                            <div className={`${styles.menuBtn_line}`}></div>
                        </div>
                    </div>
                    <div className={`col-4 ${styles.authorDiv}`}>
                        <h1>Brenda McBride</h1>
                    </div>
                    <div className={`col-4 ${styles.socialDiv}`}>
                        <ul className={`${styles.socialUl}`}>
                            <li className={`${styles.socialLi}`}><a href="#" target="_blank"><i className={`fab fa-twitter-square ${styles.socialIcon}`}></i></a></li>
                            <li className={`${styles.socialLi}`}><a href="#" target="_blank"><i className={`fab fa-facebook-square ${styles.socialIcon}`}></i></a></li>
                            <li className={`${styles.socialLi}`}><a href="#" target="_blank"><i className={`fab fa-instagram ${styles.socialIcon}`}></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;