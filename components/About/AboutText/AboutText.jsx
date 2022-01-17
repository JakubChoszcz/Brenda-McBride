import Link from 'next/link';
import styles from './AboutText.module.scss';

const AboutText = () => {
    return (
        <div className={`${styles.containerDiv}`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-6`}>
                        <div className={`${styles.textDiv}`}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum pulvinar mi ac condimentum. Morbi aliquam ipsum at gravida laoreet. Maecenas porttitor tortor ac augue dictum, nec varius lacus scelerisque. Morbi rhoncus condimentum aliquet. Aliquam urna arcu, consequat eget finibus in, fringilla eget orci. Vestibulum pellentesque feugiat euismod. Donec arcu quam, fermentum vitae eros id, suscipit condimentum ipsum. Maecenas congue tellus vitae mi elementum pharetra. Aenean euismod commodo ex, non interdum tellus molestie ac.</p>
                        </div>
                    </div>
                    <div className={`col-6`}>
                        <div className={`${styles.textDiv}`}>
                            <p>Morbi a sem sed tellus rhoncus porttitor at eu purus. Praesent condimentum accumsan lacus a tristique. Duis sed vestibulum ipsum. Pellentesque convallis nulla lectus, non pellentesque nisl laoreet et. Aenean hendrerit tortor dolor, sit amet fermentum ex elementum quis. Fusce semper suscipit neque et semper. Cras eget quam turpis. Aliquam velit enim, mattis id libero id, convallis tristique nunc.</p>
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-12`}>
                        <div className={`${styles.quoteDiv}`}>
                            <h1>Curabitur a condimentum nisl.</h1>
                        </div>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={`col-12`}>
                        <div className={`${styles.buttonDiv}`}>
                            <Link href='/posts'>
                                <a>See Posts</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutText;