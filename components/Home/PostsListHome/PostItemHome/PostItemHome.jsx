import Link from "next/link";

import styles from './PostItemHome.module.scss';

const PostItemHome = () => {
    return (
        <div className={`col-4`}>
            <div className={`${styles.postDiv}`}>
                <Link href="/">
                    <a>
                        <div 
                            style={{
                                backgroundImage: `url("https://images.pexels.com/photos/3817586/pexels-photo-3817586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`
                            }}>
                        </div>
                        <h2>TYPE</h2>
                        <h1>The Lorem Ipsum Title Dolorecs</h1>
                        <p>Nulla consectetur do excepteur aliquip fugiat labore aliquip officia labore deserunt nulla. Fugiat officia elit nulla reprehenderit do anim. Non ut pariatur commodo pariatur consectetur ipsum sint sunt mollit excepteur cillum aliqua officia.</p>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default PostItemHome;