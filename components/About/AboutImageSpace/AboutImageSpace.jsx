import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import styles from './AboutImageSpace.module.scss';

gsap.registerPlugin(ScrollTrigger);

const AboutImageSpace = () => {
    useEffect(() => {
        const tl1= gsap.timeline({scrollTrigger: {
            trigger: '.containerDiv',
            start: 'top bottom',
            end: 'center center',
            scrub: 1
        }})
            .to('.backgroundDiv', {y: "100px", ease: "none"}, 0)
    }, [])

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