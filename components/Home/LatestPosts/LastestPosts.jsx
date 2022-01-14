import Link from 'next/link';
import styles from './LatestPosts.module.scss';

const LatestPosts = () => {
    return (
        <div className={`${styles.postsContainer}`}> 
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-6`}>
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
                    <div className={`col-6`}>
                        <div className={`${styles.postDiv}`}>
                            <Link href="/">
                                <a>
                                    <div 
                                        style={{
                                            backgroundImage: `url("https://images.pexels.com/photos/3817580/pexels-photo-3817580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`
                                        }}>
                                    </div>
                                    <h2>TYPE</h2>
                                    <h1>The Lorem Ipsum Title Dolorecs</h1>
                                    <p>Nulla consectetur do excepteur aliquip fugiat labore aliquip officia labore deserunt nulla. Fugiat officia elit nulla reprehenderit do anim. Non ut pariatur commodo pariatur consectetur ipsum sint sunt mollit excepteur cillum aliqua officia.</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestPosts;