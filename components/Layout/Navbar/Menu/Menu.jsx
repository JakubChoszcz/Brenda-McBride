import Link from "next/link";

import styles from './Menu.module.css';

const Menu = ({ setIsMenuOpen }) => {

    return (
        <div className={`${styles.menuDiv}`}>
            <ul className={`${styles.menuUl}`}>
                <li><Link href="/"><a className={`${styles.menuA}`} onClick={() => setIsMenuOpen(false)}>Home</a></Link></li>
                <li><Link href="/about"><a className={`${styles.menuA}`} onClick={() => setIsMenuOpen(false)}>About</a></Link></li>
                <li><Link href="/posts"><a className={`${styles.menuA}`} onClick={() => setIsMenuOpen(false)}>Posts</a></Link></li>
                <li><Link href="/newsletter"><a className={`${styles.menuA}`} onClick={() => setIsMenuOpen(false)}>Newsletter</a></Link></li>
            </ul>
        </div>
    )
}

export default Menu;