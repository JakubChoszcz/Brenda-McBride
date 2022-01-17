import Image from 'next/image';
import PostItem from './PostsItem/PostItem';
import styles from './PostsList.module.scss';

const PostsList = ({ postsData }) => {
    return (
        <div className={`${styles.postsContainer}`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-12`}>
                        <div className={`${styles.postsTitle}`}>
                            <h1>Posts</h1>
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-12`}>
                        <div className={`${styles.postsDiv}`}>
                            {postsData.map(post => 
                                <PostItem
                                    key={post.id}
                                    id={post.id}
                                    title={post.title}
                                    description={post.description}
                                    image={post.image}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-12`}>
                        <div className={`${styles.showMoreDiv}`}>
                            <button>Show More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostsList;