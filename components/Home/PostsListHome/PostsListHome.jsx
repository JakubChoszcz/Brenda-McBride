import styles from './PostsListHome.module.scss';

import PostItemHome from './PostItemHome/PostItemHome';

const PostsListHome = () => {
    const handleSeeMore = () => {
        console.log('See More clicked');
    }

    return (
        <div className={`${styles.postsListContainer}`}>
            <div className={`container`}>
                <div className={`row`}>
                    <PostItemHome/>
                    <PostItemHome/>
                    <PostItemHome/>
                </div>
                <div className={`row`}>
                    <div className={`col-12 ${styles.buttonDiv}`}>
                        <button onClick={handleSeeMore}>See More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostsListHome;