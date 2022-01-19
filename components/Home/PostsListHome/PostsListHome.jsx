import styles from './PostsListHome.module.scss';

import PostItemHome from './PostItemHome/PostItemHome';
import Link from 'next/link';

const PostsListHome = ({ data }) => {
    return (
        <div className={`${styles.postsListContainer}`}>
            <div className={`container`}>
                <div className={`row`}>
                    {data.map((item) => 
                        <PostItemHome 
                            key={item._id} 
                            id={item._id} 
                            image={item.image}
                            title={item.title}
                            tag={item.tag}
                            description={item.description}
                        />
                    )}
                </div>
                <div className={`row`}>
                    <div className={`col-12 ${styles.buttonDiv}`}>
                        <Link href="/posts">
                            <a>See More</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostsListHome;