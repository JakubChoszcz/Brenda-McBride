import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

import styles from './AboutWelcome.module.scss';

gsap.registerPlugin(ScrollTrigger);

const AboutWelcome = () => {
    useEffect(() => {
        const tl1= gsap.timeline({scrollTrigger: {
            trigger: '.welcomeContainer',
            start: 'top top',
            end: 'center top',
            scrub: 1
        }})
            .to('.contentDiv', {y: '-128px', opacity: 0}, 0)
            .to('.scrollDownDiv', {y: '-64px', opacity: 0}, 0)
    }, [])

    return (
        <div className={`${styles.welcomeContainer} welcomeContainer`}>
            <div className={`${styles.contentDiv} contentDiv`}>
                <h1>Brenda<br/>McBride</h1>
            </div>
            <div className={`${styles.scrollDownDiv} scrollDownDiv`}>
                <div className={`${styles.mouse}`}>
                    <div className={`${styles.pointer}`}></div>
                </div>
                <h2>Scroll Down</h2>
            </div>
        </div>
    )
}

export default AboutWelcome;