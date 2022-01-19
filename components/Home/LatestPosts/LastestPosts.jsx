import Link from 'next/link';
import styles from './LatestPosts.module.scss';

const LatestPosts = ({ data }) => {
    return (
        <div className={`${styles.postsContainer}`}> 
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-lg-6 col-12`}>
                        <div className={`${styles.postDiv}`}>
                            <Link href={`/posts/${data[0]._id}`}>
                                <a>
                                    <div 
                                        style={{
                                            backgroundImage: `url(${data[0].image})`
                                        }}>
                                    </div>
                                    <h2>{data[0].tag}</h2>
                                    <h1>{data[0].title}</h1>
                                    <p>{data[0].description}</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={`col-lg-6 col-12`}>
                        <div className={`${styles.postDiv}`}>
                            <Link href={`/posts/${data[1]._id}`}>
                                <a>
                                    <div 
                                        style={{
                                            backgroundImage: `url(${data[1].image})`
                                        }}>
                                    </div>
                                    <h2>{data[1].tag}</h2>
                                    <h1>{data[1].title}</h1>
                                    <p>{data[1].description}</p>
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