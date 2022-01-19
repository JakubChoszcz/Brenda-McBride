import Link from 'next/link';
import { useEffect } from 'react';
import styles from './SelectedPost.module.scss';

const SelectedPost = ({ data }) => {
    useEffect(() => {
        document.getElementsByClassName('contentDiv')[0].innerHTML = data.content;
    })

    return (
        <div className={`${styles.postContainer}`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-12`}>
                        <div className={`${styles.titleDiv}`}>
                            <h1>{data.title}</h1>
                            
                            <div className={`${styles.imageDiv}`}>
                                <div className={`${styles.background}`}></div>
                                <div 
                                    className={`${styles.image}`} 
                                    style={{backgroundImage: `url(${data.image})`}}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-0 col-lg-2`}></div>
                    <div className={`col-12 col-lg-8`}>
                        <div className={`${styles.contentDiv}`}>
                            <div className='contentDiv'></div>
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-12`}>
                        <div className={`${styles.linkDiv}`}>
                            <Link href="/posts">
                                <a><i className="fas fa-chevron-left"></i> Back to posts</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedPost;
