import Link from "next/link";

import styles from './Menu.module.css';

const Menu = () => {
    return (
        <div className={`${styles.menuDiv}`}>
            <ul className={`${styles.menuUl}`}>
                <li><Link href="/"><a className={`${styles.menuA}`}>Home</a></Link></li>
                <li><Link href="/about"><a className={`${styles.menuA}`}>About</a></Link></li>
                <li><Link href="/post"><a className={`${styles.menuA}`}>Posts</a></Link></li>
                <li><Link href="/newsletter"><a className={`${styles.menuA}`}>Newsletter</a></Link></li>
            </ul>
        </div>
    )
}

export default Menu;