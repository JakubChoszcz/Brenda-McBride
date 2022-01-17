import Link from "next/link";

import styles from './PostItem.module.scss';

const PostItem = ({ image, title, description, id }) => {
    return (
        <div className={`${styles.postItem}`}>
            <div className={`${styles.imageDiv}`}>
                <div 
                    className={`${styles.image}`}
                    style={{backgroundImage: `url(${image})`}}
                ></div>
            </div>
            <div className={`${styles.textDiv}`}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className={`${styles.linkDiv}`}>
                <Link href={`/posts/${id}`}>
                    <a><div>W</div></a>
                </Link>
            </div>
        </div>
    )
}

export default PostItem;