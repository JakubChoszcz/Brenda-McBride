import Link from "next/link";

import styles from './PostItemHome.module.scss';

const PostItemHome = ({ id, title, tag, image, description }) => {
    return (
        <div className={`col-lg-4 col-12`}>
            <div className={`${styles.postDiv}`}>
                <Link href={`/posts/${id}`}>
                    <a>
                        <div 
                            style={{
                                backgroundImage: `url(${image})`
                            }}>
                        </div>
                        <h2>{tag}</h2>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default PostItemHome;