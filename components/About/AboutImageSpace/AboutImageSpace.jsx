import styles from './AboutImageSpace.module.scss';

const AboutImageSpace = () => {

    return (
        <div className={`${styles.containerDiv} containerDiv`}>
            <div className={`${styles.backgroundDiv} backgroundDiv`}></div>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-12`}>
                        <div className={`${styles.textDiv}`}>
                            <h1>Etiam consequat</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutImageSpace;