import InfiniteScroll from 'react-infinite-scroll-component';
import PostItem from './PostsItem/PostItem';
import styles from './PostsList.module.scss';

const PostsList = ({ postsData, getMorePosts, hasMore }) => {
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
                            <InfiniteScroll
                                dataLength={postsData.length}
                                next={getMorePosts}
                                hasMore={postsData.length === 12 ? false : true}
                                loader={<h3>Loading posts...</h3>}
                                endMessage={<h3>Theres no more posts.</h3>}
                            >
                                {postsData.map(post => 
                                    <PostItem
                                        key={post._id}
                                        id={post._id}
                                        title={post.title}
                                        description={post.description}
                                        image={post.image}
                                    />
                                )}
                            </InfiniteScroll>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostsList;